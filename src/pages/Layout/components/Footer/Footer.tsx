import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={styles.footer}>
      {' '}
      <div className={styles.container}>
        <Link to='/' className={styles.logoLink}>
          <img src='/logo.svg' alt='Logo' className={styles.logoImage} />
          <h1 className={styles.LogoName}>
            Code<span className={styles.LogoNameSecondHalf}>Lunch</span>
          </h1>{' '}
        </Link>
        <div className={styles.links}>
          <div className={styles.globalLinks}>
            <p className={styles.globalLinksText}>Загальні силки</p>
            <Link to={'/education'}>Програма навчання</Link> <br />
            <Link to={'/subscribe'}>Підписка</Link> <br />
            <Link to={'/links'}>Силки</Link>
          </div>
          <div className={styles.information}>
            <p className={styles.iformationText}>Інформація</p>
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
    </footer>
  )
}
