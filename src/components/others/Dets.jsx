import React from 'react'
import styles, {layout} from '../../style'
import Button from './Button'

export default function Dets() {
  return (
    <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>You do the business, <br className="sm:block hidden" /> we'll handle the money.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button/>
    </div>
  )
}
