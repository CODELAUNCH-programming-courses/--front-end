import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

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
          <Link to='/curses' className={styles.catalogCurses}>
            <p className={styles.cardNameCurses}>Курси</p>
            <div className={styles.Curseicons}>
              <img
                className={cn(styles.calculate, styles.sizeIcon)}
                src='http://localhost:3004/images/calculate.svg'
                alt='calculate'
              />
              <img
                className={cn(styles.exit, styles.sizeIcon)}
                src='http://localhost:3004/images/exit.svg'
                alt='exit'
              />
              <img
                className={cn(styles.express, styles.sizeIcon)}
                src='http://localhost:3004/images/express.svg'
                alt='express'
              />
              <img
                className={cn(styles.frontendInter, styles.sizeIcon)}
                src='http://localhost:3004/images/frontend-inter.svg'
                alt='frontend-inter'
              />
              <img
                className={cn(styles.frontendJun, styles.sizeIcon)}
                src='http://localhost:3004/images/frontend-jun.svg'
                alt='frontend-jun'
              />
              <img
                className={cn(styles.javascript, styles.sizeIcon)}
                src='http://localhost:3004/images/javascript.svg'
                alt='javascript'
              />
              <img className={cn(styles.key, styles.sizeIcon)} src='http://localhost:3004/images/key.svg' alt='key' />
              <img
                className={cn(styles.magic, styles.sizeIcon)}
                src='http://localhost:3004/images/magic.svg'
                alt='magic'
              />
              <img
                className={cn(styles.mail, styles.sizeIcon)}
                src='http://localhost:3004/images/mail.svg'
                alt='mail'
              />
              <img
                className={cn(styles.nest, styles.sizeIcon)}
                src='http://localhost:3004/images/nest.svg'
                alt='nest'
              />
              <img
                className={cn(styles.next, styles.sizeIcon)}
                src='http://localhost:3004/images/next.svg'
                alt='next'
              />
              <img
                className={cn(styles.react, styles.sizeIcon)}
                src='http://localhost:3004/images/react-native.svg'
                alt='react-native'
              />
            </div>
          </Link>
          <Link to='/subscribe' className={styles.catalogTarif}>
            <p className={styles.cardNameTarif}>Тарифи</p>
            <div className={styles.Tarifficons}>
              <img
                className={cn(styles.roket, styles.sizeIconTariff)}
                src='http://localhost:3004/images/roket.svg'
                alt='roket'
              />
              <img
                className={cn(styles.search, styles.sizeIconTariff)}
                src='http://localhost:3004/images/search.svg'
                alt='search'
              />
              <img
                className={cn(styles.settings, styles.sizeIconTariff)}
                src='http://localhost:3004/images/settings.svg'
                alt='settings'
              />
              <img
                className={cn(styles.wiFi, styles.sizeIconTariff)}
                src='http://localhost:3004/images/wi-fi.svg'
                alt='wi-fi'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
