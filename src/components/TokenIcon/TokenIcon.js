import React from 'react'
import PropTypes from 'prop-types'

import ReactImageFallback from 'react-image-fallback'
import LoaderSpinner from 'react-loader-spinner'
// import { buildTrustWalletUrl } from '../../helpers'
import { availableTokens } from '../../constants/tokens'
import { Svg } from '..'

function TokenIcon({
  tokenName,
  tokenAddress,
  tokenInfo = {},
  height,
  width,
  verticalAlign
}) {
  const style = {
    width: width ? width : 32,
    height: height ? height : 32,
    verticalAlign: verticalAlign ? verticalAlign : ''
  }

  const initImage = (
    <LoaderSpinner type='TailSpin' color='#5F78FF' height={30} width={30} />
  )

  const fullName =
    tokenInfo[tokenName.toUpperCase()] &&
    tokenInfo[tokenName.toUpperCase()].name

  const tokens = availableTokens.filter(
    (token) =>
      token.toUpperCase() === tokenName.toUpperCase() ||
      (fullName && token.toUpperCase() === fullName.toUpperCase())
  )

  // if in local SVG files
  if (tokens.length > 0) {
    return tokens.map((token, index) => (
      <Svg key={`${index}-icon`} style={style} type={token} />
    ))
  }

  const localSrc =
    (tokenName &&
      tokenInfo[tokenName.toUpperCase()] &&
      tokenInfo[tokenName.toUpperCase()].logoUrl) ||
    ''

  return (
    <div>
      <ReactImageFallback
        src={localSrc}
        style={style}
        initialImage={initImage}
        // fallbackImage={trustWalletFallback}
        alt={`${tokenName}-icon`}
        className={`iconImage${tokenName}`}
      />
    </div>
  )
}

TokenIcon.propTypes = {
  tokenName: PropTypes.string,
  tokenAddress: PropTypes.object.isRequired,
  tokenInfo: PropTypes.object.isRequired
}

TokenIcon.defaultProps = {
  tokenName: ''
}

export default TokenIcon
