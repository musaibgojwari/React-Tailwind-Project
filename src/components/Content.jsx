import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'
export default function Content() {
  return (
    <section id='main' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex flex-1 flex-col ${styles.flexStart} xl:0 sm:px-16 px-6`}>

        <div className="flex flex-row bg-discount-gradient items-center rounded-[20px] py-[6px] px-4 mb-2">
          <img src={discount} className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white '>20%</span> Discount for {" "}
            <span className='text-white '>1 MONTH </span> Account
          </p>
        </div>

        <div className='flex flex-row w-full justify-between items-center'>
          <h1 className='flex-1 text-white text-poppins ss:text-[72px] text-[45px] font-semibold font-poppins'>The Next <br className='sm:block hidden'/>
            <span className='text-gradient'>Generation</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0' >
            <GetStarted />
          </div>
        </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">Payment Method</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className='h-[100%] w-[100%] relative z-[5]'/>
        <div className='absolute top-0 pink__gradient z-[0] w-[40%] h-[35%]'/>
        <div className='absolute white__gradient bottom-40 rounded-full z-[1] w-[80%] h-[80%]'/>
        <div className='absolute right-10 bottom-20 blue__gradient z-[2] w-[50%] h-[50%]'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted />
      </div>

    </section>
  )
}
