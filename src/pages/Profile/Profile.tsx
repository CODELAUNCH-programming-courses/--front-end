import React, { useState } from 'react'
import styles from './Profile.module.css'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
  className?: string
}

export const Profile: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const formObject = Object.fromEntries(data.entries())
    console.log(formObject)

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formObject.email,
          password: formObject.password,
        }),
      })
      const { data, message } = await res.json()

      if (!res.ok) {
        throw new Error(message)
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('id', data.user.id)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('tariff', data.user.tariff)
      navigate('/userProfil?mode=home')
    } catch (err) {
      setError('Помилка підключення до сервера')
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.forma}>
        <div className={styles.logoSpace}>
          <img className={styles.logoImage} src='/logo.svg' alt='Logo' />
        </div>
        <h1 className={styles.registretionText}>
          Починай розробляти сайти <br /> за лічені секунди!
        </h1>
        <form onSubmit={handleForm}>
          <div className={styles.mb3}>
            <input className={styles.email} placeholder='Email' type='email' name='email' id='' />
          </div>
          <div className={styles.mb3}>
            <input className={styles.password} placeholder='Password' type='password' name='password' id='' />
          </div>
          <br />
          {error && <p className={styles.error}>{error}</p>}
          <button className={styles.btnLogIn} type='submit'>
            {' '}
            ВВІЙТИ
          </button>
        </form>
        <p className={styles.singLink}>
          Ще не маєш акаунта <Link to='/singUp'>Зареєструватися</Link>
        </p>
      </div>
    </div>
  )
}
