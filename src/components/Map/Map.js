import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import config from '../../config/config'

// import getDether from './helpers/dether'
import Geohash from 'latlon-geohash'
// import { ethers } from 'ethers'
// import ReactMapGL, { Marker } from 'react-map-gl'
import { ReactLeafletSearch } from 'react-leaflet-search'
import { Button, Text } from 'dether-ui/lib'

// leaflet
import L from 'leaflet'
import { Map, Marker, TileLayer } from 'react-leaflet'

import DeckGL, { GeoJsonLayer } from 'deck.gl'
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import styles from './styles.module.css'
import { Container, StyledPopup } from '../../styles/mapStyle'

import LoaderMap from '../LoaderMap'
// import TellerCard from './components/TellerCard'
// import ReviewsModal from './components/ReviewsModal'
// import ShopCard from './components/ShopCard'
// import { currencyIdsTab, currencies } from './constants/currencies'
// import { FormattedMessage } from 'react-intl'

// DATA TEST
import { fakeComments, fakeShops } from './data'
import Comment from '../Comment'

// const ShoppingCartIcon = new L.Icon({
//   iconUrl: require('./assets/shop.svg'),
//   iconRetinaUrl: require('./assets/shop.svg')
// })

// const SellerIcon = new L.Icon({
//   iconUrl: require('./assets/Seller.svg'),
//   iconRetinaUrl: require('./assets/Seller.svg')
// })

const mapRef = React.createRef()
const { MAPBOX_TOKEN } = config

export const DetherReactMap = ({ width, height, nightmode }) => {
  const [showMore, setShowMore] = useState({})
  const [markers, setMarkers] = useState([])
  // const [allGeohashZone, setAllGeohashZone] = useState([])
  const [searchResultLayer, setSearchResultLayer] = useState(null)
  const [showPopup, setShowPopup] = useState({})
  const [position, setPosition] = useState({})
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [loader, setLoader] = useState({})
  const [latLng, setLatLng] = useState(Geohash.decode('xn0m7m'))
  const [viewport, setViewport] = useState({
    width: width || '100%',
    height: height || '100%',
    latitude: 48.858455,
    longitude: 7.294572,
    zoom: 12
  })

  const addMarkers = () => setMarkers(fakeShops)

  // replace componentdidmount
  useEffect(() => {
    // get the initial position
    getApi()
    // addMarkers()
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

  // FETCH SHOPS

  // const getShops = async (latitude, longitude) => {
  //   // const { rpcURL } = config
  //   // const provider = new ethers.providers.JsonRpcProvider(rpcURL)
  //   // const detherJs = await getDether()

  //   // const geoHash = Geohash.encode(latitude, longitude, 6)
  //   // const markers = []

  //   // let neighboursGeohash = []

  //   // if (geoHash) {
  //   //   Object.keys(Geohash.neighbours(geoHash)).forEach((key) => {
  //   //     if (Geohash.neighbours(geoHash)[key])
  //   //       neighboursGeohash.push(Geohash.neighbours(geoHash)[key])
  //   //   })
  //   //   neighboursGeohash.push(geoHash)

  //   //   neighboursGeohash = filterZoneGeohash(neighboursGeohash)
  //   // }

  //   // if (neighboursGeohash && neighboursGeohash.length !== 0 && provider) {
  //   //   const tellers = await detherJs.getTellersInZones(
  //   //     neighboursGeohash,
  //   //     provider
  //   //   )

  //   //   console.log(':: Tellers present in these 9 zones', tellers)
  //   //   tellers.length !== 0 &&
  //   //     tellers.forEach((marker) => {
  //   //       markers.push(marker)
  //       })

  //     // const shops = await detherJs.getShopsInZones(neighboursGeohash, provider)
  //     // console.log(':: SHOP present in these 9 zones', shops)

  //     // const array = []

  //     // shops.forEach((shopArray) => {
  //     //   if (typeof shopArray === 'object' && shopArray.length !== 0) {
  //     //     shopArray.forEach((val) => {
  //     //       array.push(val)
  //     //       console.log('OK')
  //     //     })
  //     //   } else {
  //     //     array.push(shopArray)
  //     //     console.log('NOT OK')
  //     //   }
  //     // })
  //   }
  // }
  const reloadMap = () => {
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
  const getApi = async () => {
    const { data } = await axios.get('http://ip-api.com/json/?fields=lat,lon')
    try {
      setViewport({
        ...viewport,
        latitude: data.lat,
        longitude: data.lon
      })
    } catch (error) {
      console.warn(error)
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

  // useEffect(() => {
  //   getApi()
  // }, [])

  // const renderMap = () => {
  return (
    <div>
      <Map
        closePopupOnClick={false}
        zoomControl={false}
        center={[10, 10]}
        zoom={14}
        preferCanvas
        removeAttribution={true}
        attributionControl={false}
        onViewportChanged={(viewport, zoom) => {
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
            setLatLng(
              { lat: viewport.center[0], lon: viewport.center[1] },
              () => {
                // getArrayOfGeohash({
                //   lat: viewport.center[0],
                //   lon: viewport.center[1]
                // })
              }
            )
          }
        }}
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
        {/* {countryAvailable === false && (
          <div
            style={{
              textAlign: 'center',
              zIndex: 900,
              position: 'relative',
              top: '80px'
            }}
          >
            <Text color='red' variant='body1'>
              <strong>
                <FormattedMessage
                  id='home.buy.countryWarn'
                  defaultMessage='Country not open!'
                />
              </strong>
            </Text>
          </div>
        )} */}
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          minZoom={14}
        />

        {/* {this.state.markers &&
          this.state.markers.length !== 0 &&
          this.state.markers.map((marker, index) => {
            if (marker.tellerGeohash && this.getLatLong(marker.tellerGeohash)) {
              return (
                <Marker
                  onClick={() =>
                    this.setState({
                      tellerInfos: true,
                      shopInfos: false,
                      marker
                    })
                  }
                  key={index}
                  icon={SellerIcon}
                  position={[
                    this.getLatLong(marker.tellerGeohash).lat,
                    this.getLatLong(marker.tellerGeohash).lon
                  ]}
                />
              )
            }
            if (marker.position && this.getLatLong(marker.position)) {
              return (
                <Marker
                  onClick={() => {
                    this.getAddress()
                    this.setState({
                      shopInfos: true,
                      tellerInfos: false,
                      marker
                    })
                  }}
                  key={index}
                  icon={ShoppingCartIcon}
                  position={[
                    this.getLatLong(marker.position).lat,
                    this.getLatLong(marker.position).lon
                  ]}
                />
              )
            } else return ''
          })} */}
        {/* 
        <ShopCard
          address={this.state.address}
          show={this.state.shopInfos}
          close={() => this.setState({ shopInfos: false })}
          name={this.state.marker.name}
          category={this.state.marker.category}
          description={this.state.marker.description}
          opening={this.state.marker.opening}
          position={this.state.marker.position}
          setShowReviews={() =>
            this.setState({ showReviews: true, tellerInfos: false })
          }
        />
        <TellerCard
          messenger={this.state.marker.messenger}
          sellRate={this.state.marker.sellRate}
          buyRate={this.state.marker.buyRate}
          tellerAddress={this.state.marker.tellerAddress}
          buyUp={this.state.marker.buyUp}
          sellUp={this.state.marker.sellUp}
          isBuyer={this.state.marker.isBuyer}
          ticker={this.state.marker.ticker}
          show={this.state.tellerInfos}
          setShowReviews={() =>
            this.setState({ showReviews: true, tellerInfos: false })
          }
          currencyName={this.currencyFormater()}
          close={() => this.setState({ tellerInfos: false })}
        /> */}
      </Map>
      {loader === true ? <LoaderMap /> : ''}
    </div>
  )
}

// export default Map
