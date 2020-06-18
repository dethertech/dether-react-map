/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Text } from 'dether-ui'

import { Row, Col } from 'reactstrap'
import TokenIcon from '../../components/TokenIcon'
import {
  StyledContainer,
  StyledP,
  StyledCard,
  StyledDivBW,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardBody,
  StyledCardFooter,
  StyledTelegramButton
} from './TellerCardStyle'

/**
 * Actions
 */

// import { FormattedMessage } from 'react-intl'

class TellerCard extends Component {
  state = {
    redirect: false,
    chatErrMess: { '0x': 'error message here' },
    showReviews: false
  }

  componentWillUnmount = () => {
    this.setState({ chatErrMess: {} })
  }

  toggleShowReviews = () => {
    const { showReviews } = this.state

    this.setState({ showReviews: !showReviews })
  }

  currencyFormater = (amount) => {
    return Number(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  redirectTo = (page) => {
    this.setState({
      redirect: true,
      path: page
    })
  }

  setNoChat = (errMess) => {
    const { tellerAddress } = this.props
    const { chatErrMess } = this.state

    this.setState({ chatErrMess: { ...chatErrMess, [tellerAddress]: errMess } })
  }

  getPgpKeyPin = (addr) => {
    const { apiGetPinataPins } = this.props

    apiGetPinataPins({
      nameContains: 'pgpKey',
      keyvalues: { address: { value: addr, op: 'iLike' } },
      isSellerCheck: true
    })
  }
  redirectToChat = () => setTimeout(() => this.redirectTo('/chat', 1000))

  render() {
    const {
      show,
      close,
      buyRate,
      sellRate,
      buyUp,
      sellUp,
      messenger,
      currencyName,
      isBuyer,
      tellerAddress,
      // setShowReviews,

      ticker
    } = this.props

    const fullStarSymb = (
      <span style={{ color: 'gold', fontSize: '21px', marginRight: '1.5px' }}>
        &#10029;
      </span>
    )

    return (
      <StyledContainer show={show}>
        <StyledCard>
          <StyledDivBW>
            <div onClick={close} style={{ float: 'right', margin: '10px' }}>
              <Icon size='sm' color='primary' name='close' />
            </div>
            <StyledCardHeader>
              <Row>
                <StyledCardTitle>
                  <div
                    style={{ display: 'flex', justifyContent: 'flex-between' }}
                  >
                    <div>
                      <Icon name='circle' size='md' color='primary' />
                      &nbsp;
                      <Text color='primary'>
                        {tellerAddress &&
                          tellerAddress.substring(0, 6) +
                            '...' +
                            tellerAddress.substring(
                              tellerAddress.length - 4,
                              tellerAddress.length
                            )}
                      </Text>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <span style={{ marginLeft: '1.7rem' }}>
                        {fullStarSymb}
                        {/* <span
                          onClick={setShowReviews}
                          style={{
                            fontSize: '15px',
                            fontWeight: '400',
                            fontStyle: 'italic',
                            textDecoration: 'underline',
                            color: '#3750ce'
                          }}
                        >
                          review
                        </span> */}
                        <StyledP>
                          <TokenIcon
                            tokenName='ETH'
                            height={'16'}
                            width={'16'}
                          />
                          {ticker === 'BTC' ? (
                            <TokenIcon
                              tokenName='BTC'
                              height={'16'}
                              width={'16'}
                            />
                          ) : (
                            ''
                          )}
                        </StyledP>
                      </span>
                    </div>
                  </div>
                </StyledCardTitle>
              </Row>
            </StyledCardHeader>

            <StyledCardBody>
              <Row className='row-border'>
                <Col
                  style={{
                    borderRight: '1px solid #4282f1'
                  }}
                >
                  <p
                    style={{
                      lineHeight: '0px',
                      color: '#4282f1'
                    }}
                  >
                    I sell up to
                    {/* <FormattedMessage id='home.buy.card.sell' /> */}
                  </p>
                  <p
                    style={{
                      lineHeight: '0px',
                      color: '#121e38',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    {sellUp} <span>{currencyName}</span>
                  </p>
                </Col>
                <Col>
                  <p
                    style={{
                      lineHeight: '0px',
                      color: '#4282f1'
                    }}
                  >
                    fees
                    {/* <FormattedMessage id='home.buy.card.fees' /> */}
                  </p>
                  <p
                    style={{
                      lineHeight: '0px',
                      color: '#121e38',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    {sellRate} <span>%</span>
                  </p>
                </Col>
              </Row>
              {isBuyer && (
                <Row>
                  <Col
                    style={{
                      borderRight: '1px solid #4282f1'
                    }}
                  >
                    <p
                      style={{
                        lineHeight: '0px',
                        color: '#4282f1'
                      }}
                    >
                      I buy up to
                      {/* <FormattedMessage id='home.buy.card.buy' /> */}
                    </p>
                    <p
                      style={{
                        lineHeight: '0px',
                        color: '#121e38',
                        fontSize: '20px',
                        fontWeight: 'bold'
                      }}
                    >
                      {buyUp} <span>{currencyName}</span>
                    </p>
                  </Col>
                  <Col>
                    <p
                      style={{
                        lineHeight: '0px',
                        color: '#4282f1'
                      }}
                    >
                      buy fees
                      {/* <FormattedMessage id='home.buy.card.fees' /> */}
                    </p>
                    <p
                      style={{
                        lineHeight: '0px',
                        color: '#121e38',
                        fontSize: '20px',
                        fontWeight: 'bold'
                      }}
                    >
                      {buyRate} <span>%</span>
                    </p>
                  </Col>
                </Row>
              )}
            </StyledCardBody>
          </StyledDivBW>
          <StyledCardFooter>
            <Row>
              {messenger && (
                <Col>
                  <StyledTelegramButton
                    style={{ width: '100%', whiteSpace: 'nowrap' }}
                    className='btn btn-primary'
                    rel='noopener noreferrer'
                    href={`https://t.me/${messenger}`}
                    target='_blank'
                  >
                    Telegram
                  </StyledTelegramButton>
                </Col>
              )}
            </Row>
          </StyledCardFooter>
        </StyledCard>
      </StyledContainer>
    )
  }
}

TellerCard.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired

  // setShowReviews: PropTypes.func.isRequired,
  // children: PropTypes.node.isRequired
}

export default TellerCard
