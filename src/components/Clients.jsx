import React from 'react'
import styles from '../style'
import { clients } from '../constants'
import { airbnb,binance,coinbase,dropbox } from '../assets'

export default function Clients() {
  return (
    <div className={`stats ${styles.flexCenter} flex-col mb-6 flex-wrap md:flex-row`}>
     {clients.map(ele => {
        return <div key={ele.id} className={`flex-1  flex flex-col md:space-x-3 md:flex-row font-poppins justify-center items-center `}>
          <img src={ele.logo} className= 'h-[40px] w-[160px] object-contain'/>
        </div>
        })}
    </div>
  )
}
