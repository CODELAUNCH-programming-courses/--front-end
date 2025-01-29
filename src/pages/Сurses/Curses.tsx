import React from 'react'
import styles from './Curses.module.css'

interface Props {
  className?: string
}

export const Curses: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={styles.colorText}>КУРСИ</h1>
        <p className={styles.colorText}>Тут ви зможете вивчити всю нашу програму навчання</p>
        <h1 className={styles.firstLevel}>Початковий рівень</h1>
        <p className={styles.firstLevelUnderText}>Необхідна база для навчання.</p>
      </div>
    </div>
  )
}
