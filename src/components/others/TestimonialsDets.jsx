import React from 'react'
import styles from '../../style'
export default function TestimonialsDets() {
  return (
    <div className={`flex md:flex-row flex-col mb-12 justify-between items-center w-full`}>
          <h1 className={`${styles.heading2}`}>What people are <br className='md:block hidden'/> saying about us.</h1>
          <p className={`${styles.paragraph}  mt-4`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
  )
}
