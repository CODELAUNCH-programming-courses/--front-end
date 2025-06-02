import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Home.module.css'

interface Props {
  className?: string
}

export const HomePage: React.FC<Props> = () => {
  console.log('HomePage rendered')
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={cn(styles.headText, styles.colorText)}>Що вас цікавить ?</h1>
        <p className={styles.headText}>Клацни ліву або праву картку,щоб перейти перейти по розділу </p>
        <div className={styles.catalogCards}>
          <Link to='/curses' className={styles.catalogCurses}>
            <p className={styles.cardNameCurses}>Курси</p>
            <p className={styles.des}>ewgergergrвцуацукацук</p>
          </Link>
          <Link to='/subscribe' className={styles.catalogTarif}>
            <p className={styles.cardNameTarif}>Тарифи</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
