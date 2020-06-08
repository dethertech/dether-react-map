/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon, Text } from 'dether-ui'

import { Row, Col } from 'reactstrap'
import { bottomPadding } from '../../styles/platformLayout'
// import ReviewsModal from '../ReviewsModal'
import styled from 'styled-components'
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
// import { appActions, apiActions, chatActions } from '../../actions'

import { FormattedMessage } from 'react-intl'

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

  // openChatChannel = () => {
  //   const {
  //     setSellerAddress,
  //     tellerAddress,
  //     sellerAddress,
  //     pgpPubKeys
  //   } = this.props

  //   const haveStorePgpKey =
  //     typeof pgpPubKeys[tellerAddress.toLowerCase()] !== 'undefined' &&
  //     pgpPubKeys[tellerAddress.toLowerCase()] !== ''

  //   const chatRedirectSet = sellerAddress === tellerAddress

  //   if (haveStorePgpKey || chatRedirectSet) {
  //     setSellerAddress(tellerAddress)
  //     this.redirectToChat()
  //   } else {
  //     this.getPgpKeyPin(tellerAddress)
  //     // TODO: set state: small loader on chat button
  //   }
  // }

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
      setShowReviews,

      ticker
    } = this.props
    // const { redirect, path, chatErrMess, showReviews } = this.state

    const fullStarSymb = (
      <span style={{ color: 'gold', fontSize: '21px', marginRight: '1.5px' }}>
        &#10029;
      </span>
    )

    // let drawerClasses = 'tellerCard-drawer'

    // if (show) {

    //   drawerClasses = 'tellerCard-drawer open'
    // }

    // if (showReviews) {
    //   return (
    //     <ReviewsModal
    //       closeModal={this.closeModal}
    //       path='/map/'
    //       infoMessage={intl.formatMessage({ id: 'modal.review.rev' })}
    //       setErrorMessage={this.toggleShowReviews}
    //       infoTitle={intl.formatMessage({ id: 'modal.review.rev' })}
    //       sellerAddress={tellerAddress}
    //     />
    //   )
    // }

    return (
      <StyledContainer show={show}>
        <StyledCard width='50%'>
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
                          review
                          {/* <FormattedMessage id='modal.review.rev' /> */}
                        </span>
                        <br />
                        <StyledP>
                          <TokenIcon
                            tokenName='ETH'
                            tokenAddress={''}
                            tokenInfo={''}
                            height={'16'}
                            width={'16'}
                          />
                          {ticker === 'BTC' ? (
                            <TokenIcon
                              tokenName='BTC'
                              tokenAddress={''}
                              tokenInfo={''}
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
              {/* <Col>
                {hasNoPgpKey ? (
                  chatErrMess[tellerAddress]
                ) : (
                  <Button
                    style={{ width: '100%' }}
                    color='primary'
                    className='chat'
                    responsive
                    onClick={() => this.openChatChannel(tellerAddress)}
                  >
                    Chat
                  </Button>
                )}
              </Col> */}
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
              {/* <Col align="center">
                <Button
                  style={{ width: '100%' }}
                  color="primary"
                  className="chat"
                  responsive
                  onClick={setShowReviews}
                >
                  {fullStarSymb}
                </Button>
              </Col> */}
            </Row>
            <div style={bottomPadding} />
          </StyledCardFooter>
          <div style={bottomPadding} />
          <div style={bottomPadding} />
        </StyledCard>
      </StyledContainer>
    )
  }
}

TellerCard.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  sellerAddress: PropTypes.string.isRequired,
  setShowReviews: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default TellerCard
