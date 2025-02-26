import React from 'react'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logoLink}>
        <img src='/logo.svg' alt='Logo' className={styles.logoImage} />
        <h1 className={styles.LogoName}>
          Code<span className={styles.LogoNameSecondHalf}>Launch</span>
        </h1>
      </Link>

      <div className={styles.userNvigate}>
        <Link to='/curses'> Курси</Link>
        <Link to='/subscribe'>Підписка</Link>
        <div className={styles.profile}>
          <Link to='/profile'>Особистий Кабінет</Link>
        </div>
      </div>
    </div>
  )
}
