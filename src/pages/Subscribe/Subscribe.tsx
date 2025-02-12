import React from 'react'
import styles from './Subscribe.module.css'
interface Props {
  className?: string
}

export const Subscribe: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}></div>
    </div>
  )
}
