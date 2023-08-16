import React from 'react'
import { feedback } from '../../constants'
import styles from '../../style'
import { people01,people02,people03 } from '../../assets'
export default function TestimonialsPosts() {
  return (
    <div className="flex flex-col md:flex-row">
            {
                feedback.map((feed) => {
                    return <div key={feed.id} w-full className={`flex-col flex-1  ${styles.flexStart} ${styles.padding}  feature-card rounded-[20px]`}>
                        <div className='bg-orange-300'>
                            <h3 className="text-gradient text-[72px]">''</h3>
                            <p className={`${styles.paragraph} mb-4`}>{feed.content}</p>
                        </div>
                        
                        <div className={`flex bg-red-500 flex-1 w-full items-center flex-row relative`}>

                            <div className={`h-[80px] w-[80px] ${styles.flexCenter} mr-6`}>
                                <img src={feed.img} className='w-[100%] h-[100%] object-contain'/>
                            </div>
                            
                            <div className=" flex flex-col justify-center">
                                <h4 className="text-[20px] text-white">{feed.name}</h4>
                                <p className="text-dimWhite">{feed.title}</p>
                            </div>

                        </div>
                    </div>
                })
            }
    </div>
  )
}
