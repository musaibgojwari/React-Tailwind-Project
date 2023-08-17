import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'
import { instagram,facebook,twitter,linkedin } from '../assets'

export default function Footer() {
  return (
    <section id="foot" className={`flex justify-center items-start flex-col ${styles.padding} `}>
        <div className="flex flex-col md:flex-row border-b-1 pb-8 w-full">
          <div className="items-start flex flex-1 flex-col">
            <img src={logo} className='w-[220px] h-[70px] mb-4'/>
            <p className={`${styles.paragraph} max-w-[420px]`}>A new way to make the paymnets easy,reliable and secure.</p>
          </div>


          <div className="flex flex-row flex-[1.5] w-full justify-between flex-wrap">
            {footerLinks.map( (dets) => {
            return <div key={dets.id}  className="flex flex-col min-w-[150px]">
                <h4 className='text-poppins text-semibold text-[20px] leading-{24px] text-white mb-2'>{dets.title}</h4>
                <ul className="list-none">
                  {dets.links.map((link,index) => {
                    return <li key={link.name} className='text-poppins mb-2 text-normal text-[16px] leading-{24px] text-dimWhite hover:text-secondary cursor-pointer' >
                      {link.name}
                    </li>
                  })}
                </ul>
              </div>
            })}
          </div>
        </div>
      

      <div className={`w-full flex md:flex-row justify-between items-center pt-8 border-t-2 `}>
          <p className={`${styles.paragraph}`}>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>

          <div className="flex flex-col md:flex-row items-center space-x-4">
            {socialMedia.map((social) => {
              return <img key={social.id} src={social.icon} />
            })}
          </div>
      </div>
    </section>
  )
}