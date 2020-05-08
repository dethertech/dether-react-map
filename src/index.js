import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import config from './config/config'

import getDether from './helpers/dether'
import Geohash from 'latlon-geohash'
import { ethers } from 'ethers'
import ReactMapGL, { Marker } from 'react-map-gl'
import DeckGL, { GeoJsonLayer } from 'deck.gl'
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import styles from './styles.module.css'
import { Container, StyledPopup } from './styles/mapStyle'

// DATA TEST
import { fakeComments, fakeShops } from './data'
import Comment from './components/Comment'

const mapRef = React.createRef()
const { MAPBOX_TOKEN } = config

export const DetherReactMap = ({ width, height, nightmode }) => {
  const [showMore, setShowMore] = useState({})
  const [markers, setMarkers] = useState([])
  // const [allGeohashZone, setAllGeohashZone] = useState([])
  const [searchResultLayer, setSearchResultLayer] = useState(null)
  const [showPopup, setShowPopup] = useState({})
  const [viewport, setViewport] = useState({
    width: width || '100%',
    height: height || '100%',
    latitude: 48.858455,
    longitude: 7.294572,
    zoom: 12
  })

  const addMarkers = () => setMarkers(fakeShops)

  useEffect(() => {
    addMarkers()
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

  // const filterZoneGeohash = (newZoneGeohash) => {
  //   const array = []

  //   newZoneGeohash.forEach((element, index) => {
  //     if (allGeohashZone.includes(element) === false) {
  //       array.push(element)
  //     }
  //   })
  //   setAllGeohashZone(...allGeohashZone, array)

  //   return array
  // }

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

  useEffect(() => {
    getApi()
  }, [])

  return (
    <Container className={styles.container}>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        attributionControl={false}
        scrollZoom={false}
        doubleClickZoom={false}
        mapStyle={
          nightmode
            ? 'mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay'
            : 'mapbox://styles/mortyflex/ck9o8jlkv0nzc1imwgeqpjum0'
        }
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onResult={handleOnResult}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position='top-right'
        />
        <DeckGL {...viewport} layers={[searchResultLayer]} />

        {markers.map((marker) => (
          <Fragment key={marker.latitude}>
            <Marker latitude={marker.latitude} longitude={marker.longitude}>
              <div onClick={() => setShowPopup({ [marker.id]: true })}>
                <svg
                  viewBox='0 0 24 24'
                  width='28'
                  height='28'
                  stroke='#FFF'
                  strokeWidth='2'
                  fill='#007bff'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{
                    transform: 'translate(-50%, -100%)',
                    cursor: 'pointer'
                  }}
                >
                  <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
                  <line x1='3' y1='6' x2='21' y2='6' />
                  <path d='M16 10a4 4 0 0 1-8 0' />
                </svg>
              </div>
            </Marker>
            {showPopup[marker.id] && (
              <StyledPopup
                latitude={marker.latitude}
                longitude={marker.longitude}
                dynamicPosition
                closeOnClick={false}
                closeButton
                onClose={() => setShowPopup({ [marker.id]: false })}
                anchor='top'
              >
                <h6>Shop Test</h6>
                {fakeComments.map((comment) => (
                  <Comment
                    key={comment.id}
                    text={comment.text}
                    date={new Date().toLocaleDateString()}
                    rating={'⭐'.repeat(comment.rating)}
                    show={showMore[comment.id]}
                    click={() =>
                      setShowMore({ [comment.id]: !showMore[comment.id] })
                    }
                  />
                ))}
              </StyledPopup>
            )}
          </Fragment>
        ))}
      </ReactMapGL>
    </Container>
  )
}
