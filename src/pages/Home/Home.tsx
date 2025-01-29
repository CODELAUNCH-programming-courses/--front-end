import React from 'react'

import { Button } from 'src/components/ui'

import styles from './Home.module.css'

interface Props {
  className?: string
}

export const HomePage: React.FC<Props> = () => {
  console.log('HomePage rendered')
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1>Що тебе цікавить</h1>
      </div>
    </div>
  )
}
