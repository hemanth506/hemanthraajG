import React from 'react'
import { About } from '../../components/About'
import "./style.css"

export const HomePage = () => {
  return (
    <div id='home_page_main_content'>
      <div id='contents'>
        <About />
      </div>
    </div>
  )
}
