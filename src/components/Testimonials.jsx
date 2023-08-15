import React from 'react'
import styles, { layout } from '../style'
import TestimonialsDets from './others/TestimonialsDets'
import TestimonialsPosts from './others/TestimonialsPosts'
export default function Testimonials() {
  return (
    <section id="testimonials" className={`flex flex-col`}>
       <TestimonialsDets />
       <TestimonialsPosts />
  </section>
  )
}
