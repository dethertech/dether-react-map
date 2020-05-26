import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const shakeAnim = keyframes`
  10%, 90% {transform: translateX(-1px);}
  20%, 80% {transform: translateX(2px);}
  30%, 50%, 70% {transform: translateX(-4px);}
  40%, 60% {transform: translateX(4px);}
`

const ShakeWrapper = styled.div`
  transform: translateX(0);

  ${({ shake }) =>
    shake &&
    css`
      animation: ${shakeAnim} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    `};
`

/**
 * Shake component Animation
 * @extends PureComponent
 */

class Shake extends PureComponent {
  static propTypes = {
    toggle: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
      .isRequired,
  }

  static defaultProps = {
    toggle: 0,
  }

  constructor(props) {
    super(props)
    this.state = {
      shake: false,
      toggle: 0,
    }
    this.interval = null
  }

  componentWillReceiveProps = ({ toggle: propToggle }) => {
    const { toggle: stateToggle } = this.state

    if (propToggle > stateToggle) {
      this.setState({ shake: true, toggle: propToggle })
      this.interval = setTimeout(
        () => this.setState({ shake: false, toggle: 0 }),
        850,
      )
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  render = () => {
    const { children } = this.props
    const { shake } = this.state

    return <ShakeWrapper shake={shake}>{children}</ShakeWrapper>
  }
}

export default Shake
