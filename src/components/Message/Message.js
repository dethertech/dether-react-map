import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import tokens from '../../styles/tokens'

const Wrapper = styled.div`
  display: flex;
  margin: ${tokens.spaces.xs} 0;
  justify-content: center;

  ${({ alignLeft }) => 
    alignLeft &&
    css`
      text-align: left;
    `};

  ${({ theme }) => {
    switch (theme) {
      case 'infored':
        return css`
          color: ${tokens.colors.red};
          font-size: ${tokens.fontSizes.xxxs};
          font-style: italic;
          font-weight: 500;
        `
      case 'info':
        return css`
          color: ${tokens.colors.grey.light};
          font-size: ${tokens.fontSizes.xxxs};
          font-style: italic;
          font-weight: 300;
        `
      case 'danger':
        return css`
          color: ${tokens.colors.red};
          font-size: ${tokens.fontSizes.xxxs};
          font-weight: 500;
        `
      default:
        return css`
          color: ${tokens.colors.black};
          font-size: ${tokens.fontSizes.xs};
        `
    }
  }};
`

const Icon = styled.div`
  font-size: ${tokens.fontSizes.xxs};
  color: ${tokens.colors.white};
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 1.5rem;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space - around;
  font-weight: 900;
  border-radius: ${tokens.radius.circle};
  margin-right: ${tokens.spaces.s};

  ${({ theme }) => {
    switch (theme) {
      case 'info':
        return css`
          background-color: ${tokens.colors.blue};
          &:before {
            content: 'i';
          }
        `
      case 'danger':
        return css`
          background-color: ${tokens.colors.red};
          &:before {
            content: '!';
          }
        `
      default:
        return css`
          background-color: ${tokens.colors.black};
          &:before {
            content: '!';
          }
        `
    }
  }};
`

const Message = ({ theme, withIcon, alignLeft, children, onClick }) => (
  <Wrapper
    theme={theme}
    withIcon={withIcon}
    alignLeft={alignLeft}
    onClick={onClick}
  >
    {withIcon && <Icon theme={theme} />}
    <div>{children}</div>
  </Wrapper>
)

Message.propTypes = {
  theme: PropTypes.oneOf(['info', 'error', 'danger']),
  withIcon: PropTypes.bool,
  alignLeft: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Message.defaultProps = {
  alignLeft: false,
  theme: 'info',
  withIcon: true,
  onClick: undefined,
}

export default Message
