import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Curses.module.css'
export interface Course {
  id: number
  name: string
  description: string
  imageUrl: string
}

interface Props {
  className?: string
}

export const Curses: React.FC<Props> = ({ className }) => {
  const [useRes, setUseRes] = useState<Course[]>([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:3004/api/v1/courses/all')
      const result = await res.json()
      console.log('status', result.status)
      console.log('data', result.data)
      setUseRes(result.data)
    }
    getData()
  }, [])
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={styles.colorText}>КУРСИ</h1>
        <p className={styles.colorText}>Тут ви зможете вивчити всю нашу програму навчання</p>
        <h1 className={styles.firstLevel}>Початковий рівень</h1>
        <p className={styles.firstLevelUnderText}>Необхідна база для навчання.</p>
        <div className={styles.curseContainer}>
          {useRes &&
            useRes.map((el) => (
              <Link to={`/curses/${el.id}`} key={el.id} className={styles.courseCard}>
                <img src='' />
                <p>{el.name}</p>
                <p className={styles.courseDescription}>{el.description}</p>
              </Link>
            ))}
        </div>
        <h1 className={styles.firstLevel}>Продвинутий рівень </h1>
        <p>Цих знань хватить для написання 50% проектів</p>
        <h1 className={styles.firstLevel}>Мастер клас</h1>
      </div>
    </div>
  )
}
