import styled from 'styled-components'
import { Popup } from 'react-map-gl'

const Container = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  font-size: 2em;
  text-align: center;

  & div > a.mapboxgl-ctrl-logo {
    display: none !important;
  }
`

const PopupContainer = styled.div`
  cursor: pointer;
  box-shadow: 0.5px 0.5px 3px;
  margin-top: 1rem;
  padding: ${(props) => (props.show ? '0.1rem' : '0.2rem')};

  display: ${(props) => (props.show ? 'block' : '-webkit-box')};
  -webkit-line-clamp: ${(props) => (props.show ? 'unset' : '2')};
  -webkit-box-orient: ${(props) => (props.show ? 'unset' : 'vertical')};
  overflow: ${(props) => (props.show ? 'unset' : 'hidden')};
  transition: all 0.2s ease-in;

  & p {
    font-size: 0.5em;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.3rem;
  }

  & div > em {
    font-size: 13px;
  }

  & div > p {
    color: #ffc107;
    font-size: 7px;
  }
`

const StyledPopup = styled(Popup)`
  cursor: auto;
  border-radius: 7px;
  transition: all 0.7s;
  & div.mapboxgl-popup-content {
    color: #f1f1f1;
    background-image: linear-gradient(
      to top,
      #007bff,
      #2f8eff,
      #509ffd,
      #6fb0f9,
      #8ec0f5
    );
  }
  & div.mapboxgl-popup-content {
    z-index: 1 !important;
    max-width: 250px;
    max-height: 350px;
    overflow: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }

    & h6 {
      margin-top: 1rem;
    }
  }
  & div.mapboxgl-popup-content > button {
    font-size: 1.3rem;
    color: #f1f1f1;
    font-weight: 500;
    margin: 0 0.5rem;
  }
`

export { Container, PopupContainer, StyledPopup }
