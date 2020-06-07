import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.module.css'
import getDether from './helpers/dether'
import Geohash from 'latlon-geohash'
import { ethers } from 'ethers'
// import ReactMapGL, { Marker } from 'react-map-gl'
// import { ReactLeafletSearch } from 'react-leaflet-search'
import ReactLeafletSearch from 'react-leaflet-search'
import { Button, Text } from 'dether-ui/lib'
import styled from 'styled-components'

// leaflet
// import './styles/leaflet.css'
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'

import { Map, Marker, TileLayer } from 'react-leaflet'
import { FormattedMessage, injectIntl } from 'react-intl'

// import DeckGL, { GeoJsonLayer } from 'deck.gl'
// import Geocoder from 'react-map-gl-geocoder'
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

// import { Container, StyledPopup } from './styles/mapStyle'
import config from './config/config'

import LoaderMap from './components/LoaderMap'
import TellerCard from './components/TellerCard'
// import ReviewsModal from './components/ReviewsModal'
import ShopCard from './components/ShopCard'
import { currencyIdsTab, currencies } from './constants/currencies'

// DATA TEST
import { fakeComments, fakeShops } from './data'
import Comment from './components/Comment'

const WrapperMap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const ShoppingCartIcon = new L.Icon({
  iconUrl: require('./assets/shop.svg'),
  iconRetinaUrl: require('./assets/shop.svg')
})

const SellerIcon = new L.Icon({
  iconUrl: require('./assets/Seller.svg'),
  iconRetinaUrl: require('./assets/Seller.svg')
})

// const mapRef = React.createRef()
// const { MAPBOX_TOKEN } = config

export const DetherReactMap = ({ width, height, nightmode }) => {
  const [showMore, setShowMore] = useState({})
  const [markers, setMarkers] = useState([])
  const [marker, setMarker] = useState({})
  // const [allGeohashZone, setAllGeohashZone] = useState([])
  const [searchResultLayer, setSearchResultLayer] = useState(null)
  const [showPopup, setShowPopup] = useState({})
  const [position, setPosition] = useState({})
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [loader, setLoader] = useState({})
  const [allGeohashZone, setAllGeohashZone] = useState([])
  const [latLng, setLatLng] = useState(Geohash.decode('xn0m7m'))
  const [viewport, setViewport] = useState({
    width: width || '100%',
    height: height || '100%',
    latitude: 48.858455,
    longitude: 7.294572,
    zoom: 12
  })

  // shopCard infos
  const [shopAddress, setShopAddress] = useState('')
  const [shopInfos, setShopInfos] = useState(false)

  const [tellerInfos, setTellerInfos] = useState(false)

  const addMarkers = () => setMarkers(fakeShops)

  // replace componentdidmount
  useEffect(() => {
    getPosition()
  }, [])

  const handleViewportChange = (viewport) => {
    setViewport(viewport)
  }

  const handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 }

    return handleViewportChange({
      ...viewport,
      zoom: 12,
      ...geocoderDefaultOverrides
    })
  }

  const currencyFormater = () => {
    let name = null

    currencyIdsTab.forEach((el) => {
      /* eslint-disable-next-line */
      if (el.value == marker.currencyId) name = el.name
    })
    return currencies[name]
  }

  const handleOnResult = (e) => {
    setSearchResultLayer(
      new GeoJsonLayer({
        id: 'search-result',
        data: e.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    )
  }

  const getShopAddress = async (positionGeohash) => {
    const shopLatLng = getLatLong(positionGeohash)

    let response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${shopLatLng.lat}&lon=${shopLatLng.lon}&zoom=18&addressdetails=1`
    )

    let address = await response.json()
    setShopAddress(address.display_name)
  }

  // A REVOIR IMPOSSIBLE DE FETCH LES SHOPS

  const filterZoneGeohash = (newZoneGeohash) => {
    const array = []

    newZoneGeohash.forEach((element, index) => {
      if (allGeohashZone.includes(element) === false) {
        array.push(element)
      }
    })
    setAllGeohashZone(...allGeohashZone, array)

    return array
  }

  const getArrayOfGeohash = async (center = null) => {
    // const countryAvailable = await this.getCountry()
    // console.log('getArrayOfGeohash')
    // if (countryAvailable === true) {
    try {
      let markers = []
      const { rpcURL } = config
      const detherJs = await getDether()

      const provider = new ethers.providers.JsonRpcProvider(rpcURL)
      // const detherJs = new DetherJS(false)
      // await detherJs.init({ rpcURL })

      const newLatLng = center
      const geoHash = Geohash.encode(newLatLng.lat, newLatLng.lon, 6)
      let neighboursGeohash = []

      if (geoHash) {
        Object.keys(Geohash.neighbours(geoHash)).forEach((key) => {
          if (Geohash.neighbours(geoHash)[key])
            neighboursGeohash.push(Geohash.neighbours(geoHash)[key])
        })
        neighboursGeohash.push(geoHash)
        neighboursGeohash = filterZoneGeohash(neighboursGeohash)
      }
      if (neighboursGeohash && neighboursGeohash.length !== 0 && provider) {
        // get tellers data

        const tellers = await detherJs.getTellersInZones(
          neighboursGeohash,
          provider
        )
        // console.log('get tellers', tellers)
        tellers.length !== 0 &&
          tellers.forEach((marker) => {
            markers.push(marker)
          })

        const shops = await detherJs.getShopsInZones(
          neighboursGeohash,
          provider
        )
        const array = []
        // console.log('get shops', shops)
        shops.forEach((shopArray) => {
          if (typeof shopArray === 'object' && shopArray.length !== 0) {
            shopArray.forEach((val) => {
              array.push(val)
            })
          } else {
            array.push(shopArray)
          }
        })

        array.length !== 0 &&
          array.forEach((marker) => {
            if (markers && markers.length !== 0) {
              const index = markers.findIndex(
                (val) => val.name && val.name === marker.name
              )
              if (index === -1) {
                markers.push(marker)
              }
            } else {
              markers.push(marker)
            }
          })
        // console.log('markers', markers)
        setMarkers(markers)
        // this.setState({
        //   markers: [...this.state.markers, ...markers],
        //   loader: false
        // })
        setLoader(false)
      } else setLoader(false)
    } catch (e) {
      console.log(':: e ', e)
    }
    // } else this.setState({ loader: false })
  }

  const reloadMap = () => {
    setLoader(true)
    getArrayOfGeohash({
      lat,
      lon
    })
    // this.setState(
    //   {
    //     loader: true,
    //     latLng: {
    //       lat: this.lat ? this.lat : this.state.latLng.lat,
    //       lon: this.lon ? this.lon : this.state.latLng.lon,
    //     },
    //   },
    //   () => {
    //     this.getArrayOfGeohash({
    //       lat: this.lat ? this.lat : this.state.latLng.lat,
    //       lon: this.lon ? this.lon : this.state.latLng.lon,
    //     })
    //   },
    // )
  }

  // TO DO
  // 1. get device geoloc
  // if not
  // 2. get data from ip-api
  // if not
  // use default localisation
  const getPosition = async () => {
    const { data } = await axios.get('http://ip-api.com/json/?fields=lat,lon')

    if (data.lat) {
      try {
        setLat(data.lat)
        setLon(data.lon)
        setViewport({
          ...viewport,
          latitude: data.lat,
          longitude: data.lon
        })
      } catch (error) {
        console.warn(error)
      }
    } else {
      setLat(latLng.lat)
      setLon(latLng.lon)
      setViewport({
        ...viewport,
        latitude: latLng.lat,
        longitude: latLng.lon
      })
    }
  }

  const distanceLatLng = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0
    } else {
      var radlat1 = (Math.PI * lat1) / 180
      var radlat2 = (Math.PI * lat2) / 180
      var theta = lon1 - lon2
      var radtheta = (Math.PI * theta) / 180
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      if (dist > 1) {
        dist = 1
      }
      dist = Math.acos(dist)
      dist = (dist * 180) / Math.PI
      dist = dist * 60 * 1.1515
      if (unit === 'K') {
        dist = dist * 1.609344
      }
      if (unit === 'N') {
        dist = dist * 0.8684
      }
      return dist
    }
  }

  const getLatLong = (geohash) => {
    return Geohash.decode(geohash)
  }

  const showShop = async (marker) => {
    console.log('shop marker', marker)
    await getShopAddress(marker.position)
    setShopInfos(true)
    setTellerInfos(false)
    setMarker(marker)
  }

  const showTeller = (marker) => {
    setTellerInfos(true)
    setShopInfos(false)
    setMarker(marker)
  }

  const viewPortChange = (viewport, zoom) => {
    setLat(viewport.center[0])
    setLon(viewport.center[1])
    var distanceKm = distanceLatLng(
      latLng.lat,
      latLng.lon,
      viewport.center[0],
      viewport.center[1],
      'K'
    )

    if (
      viewport &&
      viewport.center &&
      viewport.center.length !== 0 &&
      distanceKm > 20
    ) {
      setLatLng({ lat: viewport.center[0], lon: viewport.center[1] })
      getArrayOfGeohash({
        lat: viewport.center[0],
        lon: viewport.center[1]
      })
    }
  }

  // const renderMap = () => {
  return (
    <div>
      <Map
        style={{ width: width, height: height }}
        closePopupOnClick={false}
        zoomControl={false}
        center={[lat, lon]}
        zoom={14}
        preferCanvas
        removeAttribution={true}
        attributionControl={false}
        onViewportChanged={(viewport, zoom) => viewPortChange(viewport, zoom)}
      >
        {/* <Search /> */}
        <ReactLeafletSearch
          zoom={14}
          closeResultsOnClick
          showPopup={false}
          showMarker={false}
          position='topleft'
          inputPlaceholder={'searchbar'}
          // inputPlaceholder={intl.formatMessage({
          //   id: 'map.searchbar.placeholder'
          // })}
        />
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          minZoom={14}
        />
        <Button
          style={{
            zIndex: 900,
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '60px',
            height: '40px',
            fontSize: '10px'
          }}
          appearance='contained'
          rounded
          // disabled={countryAvailable === false ? true : false}
          onClick={() => reloadMap()}
        >
          {/* <FormattedMessage
            id='home.buy.buttonRefresh'
            defaultMessage='REFRESH'
          /> */}
          Refresh
        </Button>

        {markers &&
          markers.length !== 0 &&
          markers.map((marker, index) => {
            if (marker.tellerGeohash && getLatLong(marker.tellerGeohash)) {
              return (
                <Marker
                  onClick={() => showTeller(marker)}
                  key={index}
                  icon={SellerIcon}
                  position={[
                    getLatLong(marker.tellerGeohash).lat,
                    getLatLong(marker.tellerGeohash).lon
                  ]}
                />
              )
            }
            if (marker.position && getLatLong(marker.position)) {
              return (
                <Marker
                  onClick={() => showShop(marker)}
                  key={index}
                  icon={ShoppingCartIcon}
                  position={[
                    getLatLong(marker.position).lat,
                    getLatLong(marker.position).lon
                  ]}
                />
              )
            } else return ''
          })}

        <ShopCard
          address={shopAddress}
          show={shopInfos}
          close={() => setShopInfos(false)}
          name={marker.name}
          category={marker.category}
          description={marker.description}
          opening={marker.opening}
          position={marker.position}
          // setShowReviews={() =>
          //   this.setState({ showReviews: true, tellerInfos: false })
          // }
        />

        <TellerCard
          messenger={marker.messenger ? marker.messenger : 'undefined'}
          sellRate={marker.sellRate ? marker.sellRate : 0}
          buyRate={marker.buyRate ? marker.buyRate : 0}
          tellerAddress={
            marker.tellerAddress
              ? marker.tellerAddress
              : '0x0000000000000000000000000000000000000000'
          }
          buyUp={marker.buyUp ? marker.buyUp : '?'}
          sellUp={marker.sellUp ? marker.sellUp : '?'}
          isBuyer={marker.isBuyer ? marker.isBuyer : false}
          ticker={marker.ticker ? marker.ticker : '?'}
          show={tellerInfos}
          // setShowReviews={() =>
          //   this.setState({ showReviews: true, tellerInfos: false })
          // }
          currencyName={currencyFormater()}
          close={() => setTellerInfos(false)}
        />
      </Map>
    </div>
    // {loader === true ? <LoaderMap /> : ''}
  )
}
