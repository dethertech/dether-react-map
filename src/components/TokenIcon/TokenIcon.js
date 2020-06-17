import React from 'react'
import PropTypes from 'prop-types'

import ReactImageFallback from 'react-image-fallback'
import LoaderSpinner from 'react-loader-spinner'
// import { buildTrustWalletUrl } from '../../helpers'
import { availableTokens } from '../../constants/tokens'
import { Svg } from '..'

import erc20Icon from './icons/erc20.png'
// import saiIcon from './icons/SAI.png'
// import dthIcon from './icons/DTH.png'
// import ethIcon from './icons/ETH.png'
// import flixxIcon from './icons/FLIXX.png'
// import havIcon from './icons/HAV.png'
// import mftIcon from './icons/MFT.png'
// import mkrIcon from './icons/MKR.png'
// import susdIcon from './icons/SUSD.png'
// import omgIcon from './icons/OMG.png'
// import repIcon from './icons/REP.png'
// import venIcon from './icons/VEN.png'
// import wethIcon from './icons/WETH.png'
// import zlaIcon from './icons/ZLA.png'
// import zrxIcon from './icons/ZRX.png'

// const icons = {
//   //saiIcon,
//   dthIcon,
//   ethIcon,
//   flixxIcon,
//   // havIcon,
//   // mftIcon,
//   // mkrIcon,
//   susdIcon,
//   // omgIcon,
//   // repIcon,
//   // venIcon,
//   // wethIcon,
//   // zlaIcon,
//   // zrxIcon,
// }

// const hasIcon = token => icons[`${token}Icon`] !== 'undefined'

// const getIcon = token => icons[`${token.toLowerCase()}Icon`]

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

  // const trustWalletFallback = (
  //   <ReactImageFallback
  //     src={buildTrustWalletUrl(tokenName, tokenAddress)}
  //     style={style}
  //     initialImage={initImage}
  //     fallbackImage={erc20Icon}
  //     alt={`${tokenName}-icon`}
  //     className={`iconImage${tokenName}`}
  //   />
  // )

  // if in local SVG files
  if (tokens.length > 0) {
    return tokens.map((token, index) => (
      <Svg key={`${index}-icon`} style={style} type={token} />
    ))
  }

  // else try redux store tokenInfo logo src
  const localSrc =
    (tokenName &&
      tokenInfo[tokenName.toUpperCase()] &&
      tokenInfo[tokenName.toUpperCase()].logoUrl) ||
    ''

  // else fallback try: trustWallet url or final fallback: local default erc20 image

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
