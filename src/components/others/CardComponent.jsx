import React from 'react'
import styles from '../../style'
export default function CardComponent(props) {
  return (
    <div key={props.key} className={`flex feature-card flex-row rounded-[20px] p-6`}>
        <div className={`h-[80px] w-[80px] ${styles.flexCenter} bg-dimBlue rounded-[20px]`} >
          <img src={props.img} className='h-[50%] w-[50%] object-contain'/>
        </div>
        <div className="flex flex-1 flex-col ml-6">
            <h3 className='text-white font-poppins font-semibold text-[18px] mb-1 leading[24px]'>{props.title}</h3>
            <p className='text-dimWhite font-poppins font-normal text-[16px] leading-[23px]'>{props.para}</p>
        </div>
    </div>
  )
}
