import React from 'react'

import { DetherReactMap } from 'dether-react-map'
import { Container, Row, Col } from 'reactstrap'

import 'dether-react-map/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import config from './config'

const App = () => {
  const { rpcURL } = config
  console.log('rpcURL example', rpcURL)
  return (
    <Container>
      <Row>
        <Col md='12'>
          <div class='jumbotron'>
            <h2>Dether react map</h2>
            <p>
              Here it is example of how you can show the map. You can provide in
              props different size.
            </p>
            <p>You can pass different size in props for height and width</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md='12'>Example: 1</Col>
        <p></p>
      </Row>
      <Row>
        <Col md='3'>
          {' '}
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien
            sapien. Curabitur in metus urna. In hac habitasse platea dictumst.
            Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh,
            lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam
            ut cursus.{' '}
            <em>
              Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id
              commodo imperdiet, metus nunc consequat lectus, id bibendum diam
              velit et dui.
            </em>{' '}
            Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.{' '}
            <small>
              Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla
              euismod ultrices massa, et feugiat ipsum consequat eu.
            </small>
          </p>
        </Col>
        <Col md='6'>
          <DetherReactMap width='100%' height='400px' rpcURL={rpcURL} />
        </Col>
        <Col md='3'>
          {' '}
          <ol>
            <li class='list-item'>Lorem ipsum dolor sit amet</li>
            <li class='list-item'>Consectetur adipiscing elit</li>
            <li class='list-item'>Integer molestie lorem at massa</li>
            <li class='list-item'>Facilisis in pretium nisl aliquet</li>
            <li class='list-item'>Nulla volutpat aliquam velit</li>
            <li class='list-item'>Faucibus porta lacus fringilla vel</li>
            <li class='list-item'>Aenean sit amet erat nunc</li>
            <li class='list-item'>Eget porttitor lorem</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <p>Example 2:</p>
        </Col>
        <Col md='12'>
          <DetherReactMap width='100%' height='400px' rpcURL={rpcURL} />
        </Col>
      </Row>
    </Container>
  )
}
export default App
