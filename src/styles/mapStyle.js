import styled from 'styled-components'

const H1 = styled.h1`
  color: #2ed573;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid grey;
  border-radius: 5px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.2);
`

const Container = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  font-size: 2em;
  text-align: center;

  & div > a.mapboxgl-ctrl-logo {
    display: none !important;
  }

  & div > .mapboxgl-popup-content {
    z-index: 1;
  }
`

export { H1, Container }
