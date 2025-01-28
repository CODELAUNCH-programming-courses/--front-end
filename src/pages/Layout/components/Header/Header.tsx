import React from 'react'

import styles from './Header.module.css'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return <div className={styles.header}></div>
}
