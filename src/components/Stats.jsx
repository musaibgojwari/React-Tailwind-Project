import React from 'react'
import StatsComp from './others/StatsComp'
import styles from '../style'

export default function Stats() {
  return (
    <div className={`stats ${styles.flexCenter} flex-col flex-wrap md:flex-row`}>
      <StatsComp />
    </div>
  )
}
