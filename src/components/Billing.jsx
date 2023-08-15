import React from 'react'
import styles, { layout } from '../style'
import BillingDets from './others/BillingDets'
import { bill } from '../assets'

export default function Billing() {
  return (
    <section id="billing" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse} h-[50%] w-[50%]`}>
      <img src={bill} className='relative z-[5] h-[100%] w-[100%]'  />
      <div className={`absolute top-0 left-1 z-[0] h-[400px] w-[400px] white__gradient `}/>
      <div className={`absolute bottom-0 left-1 z-[3] h-[400px] w-[400px] pink__gradient `}/>
    </div>
    <BillingDets />
  </section>
  )
}
