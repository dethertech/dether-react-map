import React from 'react'
import { PopupContainer } from '../styles/mapStyle'

const Comment = ({ text, date, rating, click, show }) => {
  return (
    <PopupContainer show={show} onClick={click}>
      <div>
        <em>{date}</em>
        <p>{rating}</p>
      </div>

      <p>{text}</p>
    </PopupContainer>
  )
}

export default Comment
