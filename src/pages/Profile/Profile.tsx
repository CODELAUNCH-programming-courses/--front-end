import React from 'react'
import styles from './Profile.module.css'

interface Props {
  className?: string
}

export const Profile: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.form}>
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
          <button className={styles.btnLogIn} type='button'>
            {' '}
            ВВІЙТИ
          </button>
        </form>
      </div>
    </div>
  )
}
