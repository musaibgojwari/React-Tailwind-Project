import React from 'react'
import styles, {layout} from '../../style'
import Button from './Button'

export default function CardDets() {
  return (
    <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>Find a better card deal <br className='md:block hidden' /> in few easy steps.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button/>
    </div>
  )
}