/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon, Text } from 'dether-ui'

import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Col
} from 'reactstrap'
import { bottomPadding } from '../../styles/platformLayout'
// import ReviewsModal from '../ReviewsModal'
import styled from 'styled-components'
import TokenIcon from '../../components/TokenIcon'

/**
 * Actions
 */
// import { appActions, apiActions, chatActions } from '../../actions'

import './TellerCard.css'
import { FormattedMessage } from 'react-intl'
const StyledP = styled.p`
  margin-bottom: -100px;
`
class TellerCard extends Component {
  state = {
    redirect: false,
    chatErrMess: { '0x': 'error message here' },
    showReviews: false
  }

  componentDidMount = () => {
    // const { setSellerAddress } = this.props
    // emptyNoPgpKeyAddr()
    // setSellerAddress('')
  }

  componentWillUnmount = () => {
    this.setState({ chatErrMess: {} })
  }

  componentDidUpdate = (prevProps) => {
    // const { sellerAddress, tellerAddress, noPgpKeyAddr } = this.props
    // if (
    //   prevProps.sellerAddress !== sellerAddress &&
    //   sellerAddress === tellerAddress
    // ) {
    //   this.openChatChannel(tellerAddress)
    // }
    // // if (typeof prevProps.noPgpKeyAddr !== 'undefined') {
    // if (
    //   prevProps.noPgpKeyAddr.length !== noPgpKeyAddr.length &&
    //   noPgpKeyAddr.includes(tellerAddress)
    // ) {
    //   this.setNoChat('User has not enabled chat yet')
    // }
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
      intl,
      ticker
    } = this.props
    const { redirect, path, chatErrMess, showReviews } = this.state

    const fullStarSymb = (
      <span style={{ color: 'gold', fontSize: '21px', marginRight: '1.5px' }}>
        &#10029;
      </span>
    )

    let drawerClasses = 'tellerCard-drawer'

    const hasNoPgpKey = typeof chatErrMess[tellerAddress] !== 'undefined'

    if (show) {
      drawerClasses = 'tellerCard-drawer open'
    }

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
      <div className={drawerClasses}>
        <Card width='50%' className='background-transparent'>
          <div className='background-white'>
            <div onClick={close} style={{ float: 'right', margin: '10px' }}>
              <Icon size='sm' color='primary' name='close' />
            </div>
            <CardHeader className='no-border'>
              <Row className='teller-row'>
                <CardTitle className='card-title'>
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
                </CardTitle>
              </Row>
            </CardHeader>

            <CardBody className='no-border'>
              <Row className='row-border'>
                <Col className='col-border'>
                  <p className='text-header'>
                    sell
                    {/* <FormattedMessage id='home.buy.card.sell' /> */}
                  </p>
                  <p className='text-sub-header'>
                    {sellUp} <span>{currencyName}</span>
                  </p>
                </Col>
                <Col>
                  <p className='text-header'>
                    fees
                    {/* <FormattedMessage id='home.buy.card.fees' /> */}
                  </p>
                  <p className='text-sub-header'>
                    {sellRate} <span>%</span>
                  </p>
                </Col>
              </Row>
              {isBuyer && (
                <Row>
                  <Col className='col-border'>
                    <p className='text-header'>
                      buy
                      {/* <FormattedMessage id='home.buy.card.buy' /> */}
                    </p>
                    <p className='text-sub-header'>
                      {buyUp} <span>{currencyName}</span>
                    </p>
                  </Col>
                  <Col>
                    <p className='text-header'>
                      buy fees
                      {/* <FormattedMessage id='home.buy.card.fees' /> */}
                    </p>
                    <p className='text-sub-header'>
                      {buyRate} <span>%</span>
                    </p>
                  </Col>
                </Row>
              )}
            </CardBody>
          </div>
          <CardFooter className='background-transparent'>
            <Row>
              <Col>
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
              </Col>
              {messenger && (
                <Col className='col-md-auto'>
                  <a
                    style={{ width: '100%', whiteSpace: 'nowrap' }}
                    className='telegram btn btn-primary'
                    rel='noopener noreferrer'
                    href={`https://t.me/${messenger}`}
                    target='_blank'
                  >
                    Telegram
                  </a>
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
          </CardFooter>
          <div style={bottomPadding} />
          <div style={bottomPadding} />
        </Card>
      </div>
    )
  }
}

TellerCard.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  // apiGetPinataPins: PropTypes.func.isRequired,
  // setSellerAddress: PropTypes.func.isRequired,
  // pgpPubKeys: PropTypes.object.isRequired,
  sellerAddress: PropTypes.string.isRequired,
  // noPgpKeyAddr: PropTypes.array.isRequired,
  // emptyNoPgpKeyAddr: PropTypes.func.isRequired,
  setShowReviews: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

// const mapStateToProps = ({ chat }) => ({
//   pgpPubKeys: chat.pgpPubKeys,
//   noPgpKeyAddr: chat.noPgpKeyAddr,
//   sellerAddress: chat.sellerAddress
// })

// const mapDispatchToProps = {
//   apiGetPinataPins: apiActions.apiGetPinataPins,
//   setSideDrawerOpen: appActions.setSideDrawerOpen,
//   setSellerAddress: chatActions.setSellerAddress,
//   addNoPgpKeyAddr: chatActions.addNoPgpKeyAddr,
//   emptyNoPgpKeyAddr: chatActions.emptyNoPgpKeyAddr
// }

// export default withRouter(
//   // injectIntl(connect(mapStateToProps, mapDispatchToProps)(TellerCard)),
//   injectIntl(connect(null, null)(TellerCard))
// )

export default TellerCard
