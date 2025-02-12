import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.footer}>
      {' '}
      <div className={styles.container}>
        <h1 className={styles.LogoName}>
          <img src='/vite.svg' alt='Vite Logo' />
          Code<span className={styles.LogoNameSecondHalf}>Lunch</span>
        </h1>{' '}
        <div className={styles.links}>
          <div className={styles.globalLinks}>
            <li className={styles.globalLinksText}>Загальні силки</li>
            <Link to={'/education'}>Програма навчання</Link> <br />
            <Link to={'/subscribe'}>Підписка</Link> <br />
            <Link to={'/links'}>Силки</Link>
          </div>
          <div className={styles.information}>
            <li className={styles.iformationText}>Інформація</li>
            <Link to={'/agreement'}>Угода</Link>
            <br />
            <Link to={'/privacy'}>Конфіденційність</Link>
            <br />
            <Link to={'/props'}>Реквізити</Link>
            <br />
            <Link to={'/vacancies'}>Вакансії</Link>
            <br />
          </div>
        </div>
      </div>
      <p className={styles.footerName}>
        Code<span className={styles.LogoNameSecondHalf}>Lunch © 2024 - 2025 All Rights Reserved</span>{' '}
      </p>
    </div>
  )
}
