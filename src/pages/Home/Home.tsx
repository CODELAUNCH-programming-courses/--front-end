import React from 'react'
import cn from 'classnames'

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
          <div className={styles.catalogCurses}>
            <p className={styles.cardNameCurses}>Курси</p>
          </div>
          <div className={styles.catalogTarif}>
            <p className={styles.cardNameTarif}>Тарифи</p>
          </div>
        </div>
      </div>
    </div>
  )
}
