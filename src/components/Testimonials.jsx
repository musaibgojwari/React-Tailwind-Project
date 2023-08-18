import React from 'react'
import styles, { layout } from '../style'
import TestimonialsDets from './others/TestimonialsDets'
import TestimonialsPosts from './others/TestimonialsPosts'
export default function Testimonials() {
  return (
    <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
       <TestimonialsDets />
       <TestimonialsPosts />
  </section>
  )
}
 