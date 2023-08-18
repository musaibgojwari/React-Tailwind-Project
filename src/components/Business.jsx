import React from 'react'
import styles, { layout } from '../style'
import Dets from './others/Dets'
import Cards from './others/Cards'

export default function Business() {
  return (
    <section id="business" className={`${layout.section} `}>
      <Dets />
      <Cards />
    </section>
  )
}