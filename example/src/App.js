import React from 'react'

import { DetherReactMap } from 'dether-react-map'
import { Container, Row, Col } from 'reactstrap'

import 'dether-react-map/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    // <Container>
    //   <Row>
    //     <Col>Dether React component</Col>
    //   </Row>
    //   <Row>
    //     <Col xs='3'></Col>
    //     <Col xs='3'>
    <DetherReactMap width='100vw' height='100vh' />
    //     </Col>
    //     <Col xs='3'> </Col>
    //   </Row>
    // </Container>
  )
}
export default App
