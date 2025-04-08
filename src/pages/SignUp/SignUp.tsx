import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'

interface Props {
  className?: string
}

export const SignUp: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')
  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const formObject = Object.fromEntries(data.entries())
    console.log(formObject)

    if (!formObject.email || !formObject.password) {
      setError('Будь ласка, заповніть всі поля!')
      return
    }

    setError('')

    try {
      const userData = { email: formObject.email, password: formObject.password }
      const res = await fetch('http://localhost:3004/api/v1/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(userData),
      })

      const { data, status, message } = await res.json()

      if (status === 'success') {
        localStorage.setItem('token', data.token)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('id', data.user.id)
        navigate('/userProfil?mode=home')
      } else {
        setError(message || 'Помилка при реєстрації!')
      }
    } catch (e) {
      setError('Сталася помилка при підключенні до сервера!')
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.forma}>
        <div className={styles.logoSpace}>
          <img className={styles.logoImage} src='logo.svg' alt='Logo' />
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
          <button className={styles.btnLogIn} type='submit'>
            {' '}
            Зареєструватися
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
