import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Courses.module.css'
import { useGetCourses } from './hooks/useGetCourses'

export interface Course {
  id: number
  name: string
  description: string
  imageUrl: string
}

interface Props {
  className?: string
}

export const Courses: React.FC<Props> = () => {
  const { data, isError, isPending } = useGetCourses('/courses/all')

  if (isError) {
    return <p>Server error</p>
  }

  if (isPending) {
    return <p>Is loading</p>
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={styles.colorText}>КУРСИ</h1>
        <p className={styles.colorText}>Тут ви зможете вивчити всю нашу програму навчання</p>
        <h1 className={styles.firstLevel}>Початковий рівень</h1>
        <p className={styles.firstLevelUnderText}>Необхідна база для навчання.</p>
        <div className={styles.curseContainer}>
          {data?.data?.map((el: any) => (
            <Link to={`/curses/${el.id}`} key={el.id} className={styles.courseCard}>
              <img
                src={import.meta.env.VITE_API_BASE_IMG_URL + el.imageUrl}
                alt={el.name}
                className={styles.cardsImage}
              />
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
