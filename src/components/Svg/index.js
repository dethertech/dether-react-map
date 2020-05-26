import React from 'react'
import { PropTypes } from 'prop-types'

import * as icons from './svgr'

function Svg(props) {
  const { type } = props
  const SelectedIcon = icons[type]

  if (!SelectedIcon) console.warn('The icon ', type, ' is not available.')

  return SelectedIcon ? <SelectedIcon {...props} /> : null
}

Svg.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Svg
