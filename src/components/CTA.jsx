import React from 'react'
import styles, { layout } from '../style'
import Button from './others/Button'

export default function CTA() {
  return (
    <section id="CTA" className={`${layout.section} ${styles.padding} items-center ss:items-stretch w-[100%] bg-black-gradient rounded-[20px]`}>

      <div className={`${layout.sectionInfo.replace('flex-1', 'flex-grow')}  md:w-3/5`}>
          <h1 className={`${styles.heading2} leading-[45px]`}>Let's try our service now!</h1>
          <p className={`${styles.paragraph} mt-4`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${layout.sectionImg.replace('flex-1', 'flex-grow')}  w-2/5`}>
        <Button/>
      </div>
    </section>
  )
}
