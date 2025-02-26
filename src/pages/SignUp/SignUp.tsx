import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SignUp.module.css'

interface Props {
  className?: string
}

export const SignUp: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.logoSpace}>
        <img className={styles.logoImage} src='logo.svg' alt='Logo' />
      </div>
      <div className={styles.forma}>
        <h1 className={styles.registretionText}>
          Починай розробляти сайти <br /> за лічені секунди!
        </h1>
        <form action=''>
          <div className={styles.mb3}>
            <input className={styles.email} placeholder='Email' type='email' name='' id='' />
          </div>
          <div className={styles.mb3}>
            <input className={styles.password} placeholder='Password' type='password' name='' id='' />
          </div>
          <br />
          <button className={styles.btnLogIn} type='submit'>
            {' '}
            ВВІЙТИ
          </button>
        </form>
        <p>
          Вже маєш{' '}
          <Link className={styles.logInLink} to='/profile'>
            акаунт
          </Link>
        </p>
      </div>
    </div>
  )
}
