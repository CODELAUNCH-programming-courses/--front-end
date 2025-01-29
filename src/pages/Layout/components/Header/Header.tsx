import React from 'react'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.LogoName}>
          Code<span className={styles.LogoNameSecondHalf}>Launch</span>
        </h1>
      </div>
      <div className={styles.userNvigate}>
        <Link to={'/'}> Програма</Link>
        <Link to='/subscribe'>Підписка</Link>
        <Link to='/profile'>Особистий Кабінет</Link>
      </div>
    </div>
  )
}
