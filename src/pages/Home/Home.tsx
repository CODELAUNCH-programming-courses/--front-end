import React from 'react'

import { Button } from 'src/components/ui'

import styles from './Home.module.css'

interface Props {
  className?: string
}

export const Home: React.FC<Props> = () => {
  return <div className={styles.wrap}>Home page</div>
}
