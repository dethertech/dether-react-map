/* eslint max-lines: 0 */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, AppBar, Text, Icon, Input, Loader, List } from 'dether-ui/lib'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

// import { connect } from 'react-redux'
// import { checkMatchesHash } from '../../helpers/wallet'

import { routes, config } from '../../constants'

import tokens from '../../styles/tokens'

import DetherJS from 'detherjs'
import getDetherUser from '../../helpers/detherUser'

import { VSeparator } from './PreviewModal.style'

/**
 * Actions
 */
// import { appActions } from '../../actions'
import ActionSheet from '../ActionSheet/ActionSheet'
import Shake from '../Shake/Shake'
import Message from '../Message'

const LearnMore = styled.div`
  text-align: center;
  margin: ${tokens.spaces.xxs};
  font-size: ${tokens.fontSizes.xxxxs};
  font-weight: bold;
  color: ${tokens.colors.blue};

  &:before {
    content: 'i';
    display: inline-block;
    text-align: center;
    width: 1.2rem;
    height: 1.2rem;
    font-weight: 900;
    border: solid 1px ${tokens.colors.grey.light};
    border-radius: ${tokens.radius.circle};
    margin-right: ${tokens.spaces.xxs};
  }
`

class PreviewModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    encryptedWallet: PropTypes.string.isRequired,
    // closeFunc: PropTypes.func,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired,
    show: PropTypes.bool.isRequired,
    setTransacModalOpen: PropTypes.func.isRequired,
    passwordHash: PropTypes.string.isRequired,
    preview: PropTypes.object.isRequired,
    previewListItem: PropTypes.object.isRequired,
    postReview: PropTypes.func.isRequired
    // intl: intlShape.isRequired
  }

  static defaultProps = {
    // closeFunc: null,
  }

  state = {
    error: '',
    shake: 0,
    loading: false,
    password: '',
    redirect: false,
    isRangeVisible: false,
    checked: false,
    showTermsModal: false,
    learnMore: false
  }

  handlePasswordChange = (e) => {
    this.setState({
      shake: 0,
      password: e.target.value,
      error: ''
    })
  }

  clearInput = (name) =>
    this.setState({
      [name]: '',
      shake: 0
    })

  close = (path) => {
    const { history, closeModal } = this.props

    history.push(path)
    setTimeout(() => {
      closeModal()
    }, 100)
  }

  signMessage = async (message, password) => {
    const { encryptedWallet } = this.props

    const { rpcURL } = config

    const detherJs = new DetherJS(false)

    await detherJs.init({ rpcURL })

    const detherUser = await getDetherUser(encryptedWallet)
    const signedMessage = await detherUser.signMessage(password, message)

    return signedMessage
  }

  signSubmitReview = async () => {
    const { preview, postReview, passwordHash } = this.props
    const { password } = this.state

    this.setState({ loading: true, shake: 0 })
    //const matchesPwHash = checkMatchesHash(password, passwordHash)

    if (password.length <= 8) {
      //if (password.length <= 8 || !matchesPwHash) {
      this.setState((pState) => ({
        shake: pState.shake + 1,
        error: 'Invalid password',
        loading: false
      }))
    } else {
      try {
        const { content } = preview
        const contentSigned = await this.signMessage(content, password)
        const review = { ...preview, contentSigned }

        postReview(review)
      } catch (error) {
        this.setState((pState) => ({
          shake: pState.shake + 1,
          error: error.message,
          loading: false
        }))
      }
    }
  }

  toggleRangeVisible = () => {
    this.setState(({ isRangeVisible }) => ({
      isRangeVisible: !isRangeVisible
    }))
  }

  showTerms = () => {
    const { setTransacModalOpen } = this.props

    setTransacModalOpen()
    this.setState({ showTermsModal: true })
  }

  closeTermsModal = () => {
    const { setTransacModalOpen } = this.props

    setTransacModalOpen()
    this.setState({ showTermsModal: false })
  }

  acceptTerms = () => {
    const { setTransacModalOpen } = this.props

    setTransacModalOpen()
    this.setState({ showTermsModal: false, checked: true })
  }

  displayLearnMore = () => {
    const { learnMore } = this.state

    this.setState({ learnMore: !learnMore })
  }

  render() {
    const { closeModal, show, previewListItem, intl } = this.props

    const { password, redirect, error, shake, loading, learnMore } = this.state

    return (
      <Fragment>
        <ActionSheet show={show}>
          <AppBar>
            <AppBar.Right>
              <AppBar.Title small>
                <FormattedMessage id='modal.review.prev.title' />
              </AppBar.Title>
            </AppBar.Right>
            <AppBar.Action onClick={closeModal}>
              <AppBar.Icon name='close' color='primary' />
            </AppBar.Action>
          </AppBar>
          <Text variant='body2' style={{ textAlign: 'center' }}>
            <List appearance='card' verticalMargin={10} type='header'>
              <div
                style={{
                  overflow: 'auto',
                  maxHeight: window.innerHeight - 390
                }}
              >
                <List>{previewListItem}</List>
              </div>
            </List>
          </Text>
          <VSeparator margin={16} />
          <Shake toggle={shake}>
            <Input
              style={{ borderBottomColor: 'black' }}
              placeholder='*******'
              // label={intl.formatMessage({ id: 'transacmodal.password' })}
              label={'password'}
              name='password'
              type='password'
              value={password}
              appearance='dark'
              id='password'
              size='responsive'
              onChange={this.handlePasswordChange}
              handleClearInput={() => this.clearInput('password')}
            />
          </Shake>
          {error && (
            <Text color='red' variant='body1'>
              {error}
            </Text>
          )}
          <LearnMore onClick={this.displayLearnMore}>
            <FormattedMessage id='button.learnMore' />
          </LearnMore>

          {learnMore && (
            <Message theme='danger' alignLeft withIcon={false}>
              <FormattedMessage id='modal.review.prev.learnMore' />
            </Message>
          )}
          <VSeparator margin={32} />
          <VSeparator margin={21} />
          <Button
            responsive
            // disabled={txMutex > 0}
            style={{ outline: 'none', margin: '5px 0' }}
            onClick={this.signSubmitReview}
            Icon={loading ? false : <Icon name='checkCircle' color='white' />}
          >
            {loading ? (
              <Loader.PointLoader color='white' />
            ) : (
              <FormattedMessage id='modal.review.button' />
            )}
          </Button>
          <div style={{ display: 'block', height: '125px', width: '100%' }} />
        </ActionSheet>
      </Fragment>
    )
  }
}

// const mapDispatchToProps = {
//   setTransacModalOpen: appActions.setTransacModalOpen
// }

// const mapStateToProps = ({ wallet }) => ({
//   encryptedWallet: wallet.wallet,
//   passwordHash: wallet.passwordHash
// })

// export default withRouter(
//   injectIntl(connect(mapStateToProps, mapDispatchToProps)(PreviewModal))
// )

export default PreviewModal
