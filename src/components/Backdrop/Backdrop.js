import React from 'react'
import PropTypes from 'prop-types'

import './Backdrop.css'

const Backdrop = ({ drawerClose }) => (
  <div onClick={drawerClose} className="backdrop" />
)

Backdrop.propTypes = {
  drawerClose: PropTypes.func.isRequired,
}
export default Backdrop
