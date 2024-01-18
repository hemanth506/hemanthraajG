import React from 'react'
import "./style.css"
import { myEmailId } from '../../utils'

export const RightNav = () => {
  return (
    <div id="email-main-content">
      <div id='email-content'>
        <a href={`mailto:${myEmailId}`}>
          <span id='email'>{myEmailId}</span>
        </a>
        <div id='line'></div>
      </div>
    </div>
  )
}
