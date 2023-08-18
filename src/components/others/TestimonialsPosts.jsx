import React from 'react'
import { feedback } from '../../constants'
import styles from '../../style'
import { people01,people02,people03, quotes } from '../../assets'
export default function TestimonialsPosts() {
  return (
    <div className="flex flex-col md:flex-row justify-center mx-8 md:mx-0 feedback-container">
            {
                feedback.map((feed) => {
                    return <div key={feed.id}  className={`flex flex-col px-10 py-12 my-5 rounded-[20px] feature-card`}>
                                <img src={quotes} className='w-[42.6px] h-[27.6px] object-contain' />
                                <p className={`${styles.paragraph} my-10`}>{feed.content}</p>

                        <div className={`flex`}>
                            <img src={feed.img} className='w-[48px] h-[48px] mr-5 object-contain rounded-full'/> 
                            <div className=" flex flex-col justify-center">
                                <h4 className="text-[20px] text-white">{feed.name}</h4>
                                <p className="text-dimWhite">{feed.title}</p>
                            </div>
                            <br />
                        </div>
                    </div>
                })
            }
    </div>
  )
}
