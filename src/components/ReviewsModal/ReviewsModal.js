import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import ClampLines from 'react-clamp-lines'
import {
  List,
  Button,
  Icon,
  Colors,
  Avatar,
  Textarea,
  Headings
} from 'dether-ui/lib'
import makeBlockie from 'ethereum-blockies-base64'
import PreviewModal from './PreviewModal'
import { bottomPadding } from '../../styles/platformLayout'
// import { sha256Hash } from '../../helpers/wallet/hash'
// import { apiActions, chatActions } from '../../actions'
import Backdrop from '../Backdrop/Backdrop'

const StyledClampLines = styled(ClampLines)`
  &.clamp-lines {
    color: #484848;
    text-align: initial;
  }
  button {
    float: right;
    font-weight: 300;
    font-style: italic;
    background: none;
    border: none;
    color: rgb(55, 80, 206);
    font-size: small;
  }
`

const StyledHeadingsH5 = styled(Headings.H5)`
  color: #3750ce;
`

const StyledHeadingsH6 = styled(Headings.H5)`
  color: #3750ce;
`

class ReviewsModal extends PureComponent {
  static propTypes = {
    ethAddress: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired,
    infoTitle: PropTypes.string.isRequired,
    // setErrorMessage: PropTypes.func.isRequired,
    sellerAddress: PropTypes.string.isRequired,
    apiPostPinataJson: PropTypes.func.isRequired,
    apiGetPinataPins: PropTypes.func.isRequired,
    reviewsMeta: PropTypes.object.isRequired,
    allMessages: PropTypes.object.isRequired,
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
    // intl: intlShape.isRequired
  }

  state = {
    reviewInput: '',
    showInput: false,
    starRating: 5,
    showPreview: false,
    preview: {},
    sellerId: '',
    isShop: false
  }

  componentDidMount = () => {
    const { sellerAddress, position, name } = this.props

    const isShop = Number(sellerAddress) === 0
    const sellerId = isShop
      ? sha256Hash(`${position}${name.toLowerCase()}`)
      : sellerAddress

    this.getReviewsPins(sellerId)
    this.setState({ isShop, sellerId })
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  handleClearInput = () => this.setState({ reviewInput: '' })

  pasteClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      this.setState({ reviewInput: text })
    })
  }

  areEqual = (strA, strB) => strA.toUpperCase() === strB.toUpperCase()

  toggleShowInput = (hasReviewFromUser, reviewMessages) => {
    const { showInput } = this.state
    const { ethAddress } = this.props

    const userReview = hasReviewFromUser
      ? reviewMessages.filter(
          (review) => review.by.toLowerCase() === ethAddress.toLowerCase()
        )[0]
      : null

    const initInput = hasReviewFromUser ? userReview.content : ''
    const initStars = hasReviewFromUser ? userReview.stars : 5

    this.setState({
      showInput: !showInput,
      reviewInput: initInput,
      starRating: initStars
    })
  }

  postReview = async (signedReview) => {
    const { ethAddress, apiPostPinataJson } = this.props
    const { sellerId } = this.state

    const pinContent = {
      pinataMetadata: {
        name: 'review',
        keyvalues: {
          by: ethAddress.toLowerCase(),
          of: sellerId.toLowerCase()
        }
      },
      pinataContent: signedReview
    }

    apiPostPinataJson(pinContent)
    this.setState({ showInput: false, reviewInput: '', showPreview: false })

    setTimeout(() => this.getReviewsPins(sellerId), 5000)
  }

  getReviewsPins = (sellerId) => {
    const { apiGetPinataPins } = this.props

    apiGetPinataPins({
      nameContains: 'review',
      keyvalues: { of: { value: sellerId, op: 'iLike' } },
      sellerAddressRef: sellerId
    })
  }

  toMessageRow = (message, key) => {
    // const { intl } = this.props
    const authorAddr = message.by

    const starRatingSymbols = (
      <span>
        {[1, 1, 1, 1, 1].map((num, index) =>
          message.stars + index >= 5 ? (
            <span style={{ color: 'gold' }} key={index}>
              &#10029;
            </span>
          ) : (
            <span />
          )
        )}
      </span>
    )

    const shortContent =
      message.content.length > 800
        ? `${message.content.substring(0, 800)}...`
        : `${message.content}`

    const messageDate = new Date(message.ts).toLocaleString('en-GB', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })

    const blockie = makeBlockie(authorAddr)
    const addrBlockie = <Avatar src={blockie} size='small' appearance='card' />

    return (
      <List.Item
        key={key}
        appearance='card'
        verticalMargin={5}
        style={{
          cursor: 'pointer',
          backgroundColor: 'rgb(223, 228, 234)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          minHeight: '175px',
          // backgroundColor: '#FFFFFF',
          border: 'none',
          borderRadius: '7px',
          marginBottom: '5px'
        }}
        onClick={() => {}}
      >
        <div style={{ display: 'flex', flexFlow: 'column' }}>
          <div
            style={{
              marginBottom: '0.5em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>{addrBlockie}</span>
            <span
              style={{
                color: '#484848',
                fontWeight: '500',
                fontStyle: 'italic'
              }}
            >{`${authorAddr.slice(0, 7)}...${authorAddr.slice(-4)}`}</span>
          </div>
          <div
            style={{
              color: '#484848',
              marginBottom: '0.5em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>{starRatingSymbols}</span>
            <span>{messageDate}</span>
          </div>
          <div>
            <StyledClampLines
              // moreText={intl.formatMessage({ id: 'modal.review.prev.more' })}
              // lessText={intl.formatMessage({ id: 'modal.review.prev.less' })}
              moreText={'moretext'}
              lessText={'lesstext'}
              lines={2}
              text={shortContent}
              id='default'
            />
          </div>
        </div>
      </List.Item>
    )
  }

  updateStars = (starIndex) => {
    const { starRating } = this.state

    const maxStars = 5
    const minStars = 1
    const numEmptyStars = maxStars - starRating

    const emptyStarClicked = numEmptyStars > starIndex

    const newStarRating = emptyStarClicked ? starRating + 1 : starRating - 1

    this.setState({ starRating: newStarRating || minStars })
  }

  filterReviewMessages = (sellerReviewsMeta, allMessages) =>
    sellerReviewsMeta && sellerReviewsMeta.length > 0
      ? sellerReviewsMeta
          .map((revMeta) => revMeta.hash)
          .filter((hash) => hash in allMessages)
          .map((hash) => allMessages[hash])
          // unique author or most recent only
          .reduce((acc, each) => {
            const currIdx = acc
              .map((review) => review.by.toLowerCase())
              .indexOf(each.by.toLowerCase())

            if (currIdx !== -1) {
              const curr = acc[currIdx]

              if (each.ts > curr.ts) {
                acc[currIdx] = each
              }

              return acc
            }
            acc.push(each)

            return acc
          }, [])
      : []

  closeModal = () => {
    this.setState({ showPreview: false })
  }

  sortByTsNewest = (a, b) =>
    new Date(b.ts).valueOf() > new Date(a.ts).valueOf() ? 1 : -1

  signShowPreview = () => {
    const { ethAddress, sellerAddress, name } = this.props
    const { reviewInput, starRating, isShop } = this.state

    const displayName = isShop ? name : sellerAddress
    const ts = new Date().valueOf()
    const preview = {
      of: displayName,
      by: ethAddress,
      content: reviewInput,
      // contentSigned: signedMessage,
      ts,
      stars: starRating
    }

    this.setState({ showPreview: true, preview })
  }

  render() {
    const {
      infoTitle,
      sellerAddress,
      ethAddress,
      reviewsMeta,
      allMessages,
      closeModal,
      name,
      intl
    } = this.props
    const {
      reviewInput,
      showInput,
      starRating,
      showPreview,
      preview,
      sellerId,
      isShop
    } = this.state

    const sellerNameShort = isShop
      ? name
      : ` ${sellerAddress.slice(0, 7)}...${sellerAddress.slice(-4)}`
    const sellerIndex = sellerId.toLowerCase().slice(-5)
    const sellerReviewsMeta = reviewsMeta[sellerIndex]

    const reviewMessages = this.filterReviewMessages(
      sellerReviewsMeta,
      allMessages
    ).sort(this.sortByTsNewest)

    const fullStar = <span>&#10029;</span>
    const emptyStar = <span>&#10027;</span>
    const hasReviewFromUser =
      reviewMessages
        .map((review) => review.by.toLowerCase())
        .indexOf(ethAddress.toLowerCase()) !== -1

    const errorMessage = '' // TODO

    const inputHeight = showInput ? 300 : 0

    return (
      <Container
        style={{
          height: window.innerHeight + inputHeight,
          maxHeight: window.innerHeight + inputHeight,
          WebkitOverflowScrolling: 'touch',
          overflow: 'auto'
        }}
      >
        <div onClick={closeModal} style={{ cursor: 'pointer', float: 'right' }}>
          <Icon name='close' color='primary' />
        </div>
        <Row
          style={{
            marginTop: '2em',
            marginLeft: '1em',
            position: 'relative'
          }}
        >
          <StyledHeadingsH5>{infoTitle}</StyledHeadingsH5>
        </Row>
        <Row
          style={{
            position: 'relative',
            marginLeft: '1em',
            marginBottom: '28px'
          }}
        >
          <StyledHeadingsH6>
            <FormattedMessage
              id='modal.review.prev.user'
              defaultMessage={`User:  ${sellerNameShort}`}
              values={{ user: sellerNameShort }}
              description='Title Reviews 2'
            />
          </StyledHeadingsH6>
        </Row>
        <Row style={{ marginBottom: '32px' }}>
          <Col sm='12' md={{ size: 6, offset: 3 }}>
            {reviewMessages.length > 0 ? (
              <List appearance='card' verticalMargin={10} type='header'>
                <div
                  style={{
                    overflow: 'auto',
                    maxHeight: window.innerHeight - 390
                  }}
                >
                  <List>{reviewMessages.map(this.toMessageRow)}</List>
                </div>
              </List>
            ) : (
              <div>
                <div>
                  <h6 style={{ textAlign: 'center', color: Colors.black }}>
                    <Icon name='shoppingCart' color='primary' />
                    {sellerNameShort}
                  </h6>
                </div>
                <div>
                  <h6 style={{ textAlign: 'center', color: Colors.black }}>
                    <FormattedMessage
                      id='modal.review.noreview'
                      defaultMessage='This user hasn’t been reviewed yet.'
                      description='No reviews default'
                    />
                  </h6>
                </div>
                <div>
                  <h6>
                    <FormattedMessage
                      id='modal.review.add'
                      defaultMessage='Click on ADD A REVIEW below to leave a review.'
                      description='No reviews default'
                    />
                  </h6>
                </div>
              </div>
            )}
          </Col>
        </Row>
        {showInput && (
          <div>
            <span
              onClick={() =>
                this.toggleShowInput(hasReviewFromUser, reviewMessages)
              }
              style={{ cursor: 'pointer', float: 'right' }}
            >
              <Icon name='close' color='primary' />
            </span>
            <Row>
              {[1, 1, 1, 1, 1].map((num, index) => (
                <span
                  style={{
                    cursor: 'pointer',
                    fontSize: '35px',
                    color: 'gold'
                  }}
                  onClick={() => this.updateStars(index)}
                >
                  {starRating + index >= 5 ? fullStar : emptyStar}
                </span>
              ))}
            </Row>
            <Row>
              <Col sm='12' md={{ size: 6, offset: 3 }}>
                <Textarea
                  isErrored={!!errorMessage}
                  errorMessage={errorMessage}
                  label={intl.formatMessage({ id: 'modal.review.label' })}
                  placeholder={intl.formatMessage({
                    id: 'modal.review.placeholder'
                  })}
                  value={reviewInput}
                  onChange={this.handleChange}
                  id='input-review'
                  name='reviewInput'
                  type='message'
                />
              </Col>
            </Row>
            <Row>
              <Col sm='12' md={{ size: 6, offset: 3 }} align='center'>
                <Button
                  style={{ outline: 'none', margin: '5px 0' }}
                  onClick={this.signShowPreview}
                  Icon={false}
                >
                  <FormattedMessage id='modal.review.button' />
                </Button>
              </Col>
            </Row>
            <div style={bottomPadding} />
          </div>
        )}
        {!showInput && (
          <Row>
            <Col sm='12' md={{ size: 6, offset: 3 }} align='center'>
              <Button
                color='primary'
                onClick={() =>
                  this.toggleShowInput(hasReviewFromUser, reviewMessages)
                }
              >
                {hasReviewFromUser ? (
                  <FormattedMessage id='modal.review.updButton' />
                ) : (
                  <FormattedMessage id='modal.review.addButton' />
                )}
              </Button>
            </Col>
          </Row>
        )}
        {showPreview && (
          <Backdrop drawerClose={() => this.setState({ showPreview: false })} />
        )}
        <PreviewModal
          previewListItem={showPreview ? this.toMessageRow(preview) : null}
          preview={preview}
          postReview={this.postReview}
          show={showPreview ? true : false}
          closeModal={this.closeModal}
          path='/map'
        />
      </Container>
    )
  }
}
// const mapStateToProps = ({ wallet, chat }) => ({
//   reviewsMeta: chat.reviewsMeta,
//   allMessages: chat.allMessages,
//   ethAddress: wallet.ethAddress,
// })

// const mapDispatchToProps = {
//   setUsername: chatActions.setUsername,
//   apiPostPinataJson: apiActions.apiPostPinataJson,
//   apiGetPinataPins: apiActions.apiGetPinataPins,
// }

// export default withRouter(
//   injectIntl(connect(mapStateToProps, mapDispatchToProps)(ReviewsModal)),
// )

export default ReviewsModal
