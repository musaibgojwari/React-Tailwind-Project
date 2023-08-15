import React from 'react'
import { features } from '../../constants'
import CardComponent from './CardComponent'
import { star,shield,send } from '../../assets'
import { layout } from '../../style'
export default function Cards(props) {
  return (
    <div className={`${layout.sectionImg} flex-col`}>
        {
            features.map((ele) => {
               return <CardComponent key={props.id} img={ele.icon} title={ele.title} para={ele.content}/>
            })
        }
    </div>
  )
}