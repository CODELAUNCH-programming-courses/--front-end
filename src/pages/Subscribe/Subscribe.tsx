import React from 'react'
import styles from './Subscribe.module.css'
import cn from 'classnames'

interface Props {
  className?: string
}

export const Subscribe: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={cn(styles.headText, styles.colorText)}>Оформи підписку</h1>
        <div className={styles.catalogCards}>
          <div className={styles.catalogTarif}>
            <p className={styles.cardNameTarif}>Легенда</p>
            <p className={styles.description}>Підтримка 24/7 в тг чаті</p>
            <p>Доступ до всіх уроків</p>
          </div>
        </div>
      </div>
    </div>
  )
}
