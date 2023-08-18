import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
export default function GetStarted() {
  return (
    <div className={`w-[140px] h-[140px] bg-blue-gradient cursor-pointer ${styles.flexCenter} rounded-full p-[2px]`}>
      <div className={`w-[100%] h-[100%] flex-col rounded-full ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text[18px] leading-[23.4px]'>
            <span className='text-gradient'>Get</span>
          </p>
            <img src={arrowUp} className='h-[23px] w-[23px] object-contain'/>
        </div>
          <p className='font-poppins font-medium text[18px] leading-[23.4px]'>
            <span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  )
}
