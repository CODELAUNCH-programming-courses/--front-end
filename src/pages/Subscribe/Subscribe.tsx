import React from 'react'
import styles from './Subscribe.module.css'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

interface Props {
  className?: string
}

export const Subscribe: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate()

  const handleBuyTariff = async () => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('id')

    if (!token || !userId) {
      // Якщо користувач не авторизований — редірект
      navigate('/singUp')
      return
    }

    try {
      const response = await fetch(`http://localhost:3004/api/v1/user/${userId}/set-tariff?tariff=Legend`, {
        method: 'PATCH',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Помилка: ${response.status}`)
      }

      const result = await response.json()
      console.log('Тариф встановлено:', result)
      localStorage.setItem('tariff', 'Legend')

      alert('Вітаємо! Ви отримали тариф Legend.')
      navigate('/profile')
    } catch (error: any) {
      console.error('Помилка підписки:', error)
      alert('Виникла помилка при встановленні тарифу.')
    }
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={cn(styles.headText, styles.colorText)}>Оформи підписку</h1>
        <div className={styles.catalogCards}>
          <div className={styles.catalogTarif}>
            <div>
              <p className={styles.cardNameTarif}>Легенда</p>
              <p className={styles.description}>Підтримка 24/7 в тг чаті</p>
              <p>Доступ до всіх уроків</p>
              <p>Особистий куратор, що допоможе з домашніми завданнями</p>
              <p>Ексклюзивні вебінари щотижня</p>
              <p>Сертифікат після проходження курсу</p>
              <p>Доступ до закритої спільноти розробників</p>
              <p>Першочергова відповідь на запити підтримки</p>
            </div>
            <div className={styles.rightSidePaymant}>
              <p className={styles.discount}>-40%</p>
              <p>1799ГРН</p>
              <p className={styles.fullPrice}>2999ГРН</p>
            </div>
            <button className={styles.byTarif} onClick={handleBuyTariff}>
              Оплатити 1799ГРН
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
