import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import config from './config/config'
import { v4 as uuid } from 'uuid'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import DeckGL, { GeoJsonLayer } from 'deck.gl'
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import styles from './styles.module.css'
import { H1, Container } from './styles/mapStyle'

const mapRef = React.createRef()
const { MAPBOX_TOKEN } = config

export const DetherReactMap = ({ width, height, nightmode }) => {
  const [markers, setMarkers] = useState([])
  const [searchResultLayer, setSearchResultLayer] = useState(null)
  const [showPopup, setShowPopup] = useState({})
  const [viewport, setViewport] = useState({
    width: width || '100%',
    height: height || '100%',
    latitude: 48.858455,
    longitude: 7.294572,
    zoom: 6
  })

  const handleViewportChange = (viewport) => setViewport(viewport)

  const handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 }

    return handleViewportChange({
      ...viewport,
      zoom: 6,
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

  const showMarker = (e) => {
    const [longitude, latitude] = e.lngLat
    setMarkers([
      ...markers,
      {
        id: uuid(),
        latitude,
        longitude
      }
    ])
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

  useEffect(() => {
    getApi()
  }, [])

  return (
    <Container className={styles.container}>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        attributionControl={false}
        onDblClick={showMarker}
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
        <H1>Dether Map</H1>
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
                  fill='#2ed573'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ transform: 'translate(-50%, -100%)' }}
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
              </div>
            </Marker>
            {showPopup[marker.id] && (
              <Popup
                style={{ overflow: 'hidden' }}
                latitude={marker.latitude}
                longitude={marker.longitude}
                dynamicPosition
                closeOnClick={false}
                closeButton={false}
                onClose={() => setShowPopup({ [marker.id]: false })}
                anchor='top'
              >
                <div
                  className='popup'
                  style={{
                    maxWidth: '200px',
                    maxHeight: '250px',
                    overflow: 'auto'
                  }}
                >
                  <h6>comments</h6>
                  <p style={{ fontSize: '0.5em' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, assumenda in? Quasi nulla nostrum eligendi enim,
                    veritatis repellat expedita aspernatur? Tempore ratione
                    maiores illo at! Libero, sint architecto!
                  </p>
                  <button
                    style={{
                      minWidth: '100%',
                      padding: '.3rem',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShowPopup({ [marker.id]: false })}
                  >
                    Close
                  </button>
                </div>
              </Popup>
            )}
          </Fragment>
        ))}
      </ReactMapGL>
    </Container>
  )
}
