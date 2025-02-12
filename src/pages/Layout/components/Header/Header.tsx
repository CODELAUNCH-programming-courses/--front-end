import React, { useState } from 'react'

import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  const location = useLocation()
  const firstLink = location.pathname === '/' ? { path: '/homepage', text: 'Програма' } : { path: '/', text: 'Курси' }
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.LogoName}>
          <img src='/vite.svg' alt='Vite Logo' />
          Code<span className={styles.LogoNameSecondHalf}>Launch</span>
        </h1>
      </div>

      <div className={styles.userNvigate}>
        <Link to={firstLink.path}>{firstLink.text}</Link>
        <Link to='/subscribe'>Підписка</Link>
        <div className={styles.profile}>
          <Link to='/profile'>Особистий Кабінет</Link>
        </div>
      </div>
    </div>
  )
}
