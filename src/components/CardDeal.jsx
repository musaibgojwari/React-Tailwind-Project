import React from 'react'
import styles, { layout } from '../style'
import { card } from '../assets'
import CardDets from './others/CardDets'
export default function CardDeal() {
  return (
    <section id="carddeals" className={`${layout.section}`}>
    <CardDets />
    <div className={`${layout.sectionImg} h-[50%] w-[50%]`}>
      <img src={card} className='relative z-[5] h-[100%] w-[100%]'  />
      <div className={`absolute top-0 right-1 z-[0] h-[400px] w-[400px] white__gradient `}/>
      <div className={`absolute bottom-0 right-1 z-[3] h-[400px] w-[400px] pink__gradient `}/>
    </div>
  </section>
  )
}
