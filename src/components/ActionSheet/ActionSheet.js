import React from 'react'
import PropTypes from 'prop-types'

import { StyledActionSheet } from './ActionSheet.style'

const ActionSheet = ({ children, show }) => {
  let modalClasses = 'ActionSheet__content ActionSheet__content--close'

  if (show) {
    modalClasses = 'ActionSheet__content ActionSheet__content--open'
  }

  return (
    <StyledActionSheet>
      <div className={modalClasses}>{children}</div>
    </StyledActionSheet>
  )
}

ActionSheet.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ActionSheet
