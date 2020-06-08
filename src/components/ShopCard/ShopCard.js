import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon } from 'dether-ui'

import { CardTitle, Row, Col } from 'reactstrap'

import { getOpeningUnformated } from '../../helpers'

import { FormattedMessage } from 'react-intl'
import {
  StyledContainer,
  StyledCard,
  StyledDivBW,
  StyledCardHeader,
  StyledCardBody
} from './ShopCardStyle'

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
        <p
          style={{
            display: 'block',
            height: '1px',
            lineHeight: '0px',
            color: '#000'
          }}
        >
          <span style={{ float: 'left' }}>{dayArr[0]}</span>
          <span style={{ float: 'right' }}>{dayArr[1]}</span>
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
    // let drawerClasses = 'shopCard-drawer'
    // if (show) {
    //   drawerClasses = 'shopCard-drawer open'
    // }
    return (
      <StyledContainer show={show}>
        <StyledCard>
          <StyledDivBW>
            <div onClick={close} style={{ float: 'right', margin: '10px' }}>
              <Icon size='sm' color='primary' name='close' />
            </div>
            <div style={{ float: 'left', margin: '15px' }}>
              <Icon name='shoppingCart' color='primary' size='md' />
            </div>
            <StyledCardHeader>
              <Row className='shop-row'>
                <Col>
                  <CardTitle
                    style={{
                      color: '#3c80f1',
                      fontSize: '19px',
                      fontWeight: 'bold'
                    }}
                  >
                    {name}
                  </CardTitle>
                  <span
                    style={{
                      lineHeight: 0,
                      display: 'block'
                    }}
                  >
                    {category}
                  </span>
                  <br />
                  <span
                    style={{
                      lineHeight: 0,
                      color: '#3c80f1',
                      fontSize: '11px',
                      textAlign: 'center'
                    }}
                  >
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
                      Review
                    </span>
                  </span>
                </Col>
              </Row>
            </StyledCardHeader>

            <StyledCardBody className='no-border'>
              <p className='shop-website'>{description}</p>
              <div
                style={{
                  padding: '0px 15px'
                }}
              >
                <this.renderHours />
              </div>
            </StyledCardBody>
          </StyledDivBW>
        </StyledCard>
      </StyledContainer>
    )
  }
}

ShopCard.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  setShowReviews: PropTypes.func.isRequired
}

export default ShopCard
