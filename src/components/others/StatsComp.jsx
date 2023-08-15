import React from 'react'
import styles from '../../style'
import { stats } from '../../constants'
export default function StatsComp() {
  return (
    <>
    {stats.map(ele => {
        return <div key={ele.id} className={`flex-1 flex flex-col md:mr-3 md:flex-row font-poppins justify-center items-center `}>
            <h1 className='text-[32px] font-medium text-white'>{ele.value}</h1>
            <span className='ml-3 text-[20px] text-white text-gradient'>{ele.title}</span>
        </div>
        })}
    </>
  )
}
