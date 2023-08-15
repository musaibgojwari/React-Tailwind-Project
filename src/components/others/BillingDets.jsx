import React from 'react'
import styles,{ layout } from '../../style'
import { google,apple } from '../../assets'

export default function BillingDets() {
  return (
    <div className={`${layout.sectionInfo} `}>
        <h1 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" /> billing and invoicing.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex mt-10 space-x-16'>
            <a href='/' ><img src={google}/></a>
            <a href='/' ><img src={apple} alt="" /></a>
        </div>
    </div>
  )
}
