import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon } from 'dether-ui'

import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap'
import { bottomPadding } from '../../styles/platformLayout'

import { getOpeningUnformated } from '../../helpers'
/**
 * Actions
 */
// import { appActions } from '../../actions'

import './ShopCard.css'
import { FormattedMessage } from 'react-intl'

class ShopCard extends Component {
  state = {}

  currencyFormater = (amount) => {
    return Number(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  renderHours = () => {
    const { opening } = this.props

    const openingUnformated = getOpeningUnformated(opening)

    return openingUnformated.map((opening, index) => {
      const dayArr = opening.split('/')
      return (
        <p className='shop-timing'>
          <span className='day'>{dayArr[0]}</span>
          <span className='timing'>{dayArr[1]}</span>
        </p>
      )
    })
  }

  render() {
    const {
      show,
      close,
      name,
      category,
      description,
      setShowReviews,
      address
    } = this.props

    const fullStarSymb = (
      <span style={{ color: 'gold', fontSize: '21px', marginRight: '1.5px' }}>
        &#10029;
      </span>
    )
    let drawerClasses = 'shopCard-drawer'
    if (show) {
      drawerClasses = 'shopCard-drawer open'
    }

    return (
      <div className={drawerClasses}>
        <Card className='background-transparent'>
          <div className='background-white'>
            <div onClick={close} style={{ float: 'right', margin: '10px' }}>
              <Icon size='sm' color='primary' name='close' />
            </div>
            <div style={{ float: 'left', margin: '15px' }}>
              <Icon name='shoppingCart' color='primary' size='md' />
            </div>
            <CardHeader className='no-border'>
              <Row className='shop-row'>
                <Col>
                  <CardTitle>{name}</CardTitle>
                  <span className='shop-sub-tile'>{category}</span>
                  <br />
                  <span className='shop-address'>
                    <em
                      onClick={() =>
                        window.open(
                          `https://maps.google.com/maps?daddr=${address}&amp;ll=`
                        )
                      }
                    >
                      {address}
                    </em>
                  </span>
                </Col>
              </Row>
              <Row className='shop-row1'>
                <Col>
                  <span>
                    {fullStarSymb}
                    <span
                      onClick={setShowReviews}
                      style={{
                        fontSize: '15px',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        textDecoration: 'underline',
                        color: '#3750ce'
                      }}
                    >
                      {/* <FormattedMessage id='modal.review.rev' /> */}
                      modal.review.rev
                    </span>
                  </span>
                </Col>
              </Row>
            </CardHeader>

            <CardBody className='no-border'>
              <p className='shop-website'>{description}</p>
              <div className='shop-timing-container'>
                <this.renderHours />
              </div>
            </CardBody>
            <div style={bottomPadding} />
          </div>
          <div style={bottomPadding} />
          <div style={bottomPadding} />
        </Card>
      </div>
    )
  }
}

ShopCard.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  setShowReviews: PropTypes.func.isRequired
}

// const mapDispatchToProps = {
//   setSideDrawerOpen: appActions.setSideDrawerOpen
// }

//export default withRouter(connect(null, mapDispatchToProps)(ShopCard))

export default ShopCard
