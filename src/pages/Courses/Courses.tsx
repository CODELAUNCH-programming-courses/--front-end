import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Courses.module.css'
import { useGetCourses } from './hooks/useGetCourses'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  useEffect(() => {
    const tariff = localStorage.getItem('tariff')
    if (!tariff) {
      navigate('/subscribe')
    }
  }, [navigate])

  const { data: beginnerCourses, isError: beginnerError, isPending: beginnerPending } = useGetCourses('Beginner')
  const {
    data: intermediateCourses,
    isError: intermediateError,
    isPending: intermediatePending,
  } = useGetCourses('Intermediate')
  const { data: advancedCourses, isError: advancedError, isPending: advancedPending } = useGetCourses('Advanced')

  if (beginnerError || intermediateError || advancedError) {
    return <p>Server error</p>
  }

  if (beginnerPending || intermediatePending || advancedPending) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={styles.colorText}>КУРСИ</h1>
        <p className={styles.colorText}>Тут ви зможете вивчити всю нашу програму навчання</p>

        {beginnerCourses.data && (
          <>
            <h1 className={styles.firstLevel}>Початковий рівень</h1>
            <p className={styles.firstLevelUnderText}>Необхідна база для навчання.</p>
            <div className={styles.curseContainer}>
              {beginnerCourses.data.map((el: Course) => (
                <Link to={`/curses/${el.id}`} key={el.id} className={styles.courseCard}>
                  <img
                    src={import.meta.env.VITE_API_BASE_IMG_URL + el.imageUrl}
                    alt={el.name}
                    className={styles.cardsImage}
                  />
                  <p className={styles.cardsName}>{el.name}</p>
                  <p className={styles.courseDescription}>{el.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        {advancedCourses.data && (
          <>
            <h1 className={styles.firstLevel}>Продвинутий рівень</h1>
            <p>Цих знань хватить для написання 50% проектів</p>
            <div className={styles.curseContainer}>
              {advancedCourses.data.map((el: Course) => (
                <Link to={`/curses/${el.id}`} key={el.id} className={styles.courseCard}>
                  <img
                    src={import.meta.env.VITE_API_BASE_IMG_URL + el.imageUrl}
                    alt={el.name}
                    className={styles.cardsImage}
                  />
                  <p className={styles.cardsName}>{el.name}</p>
                  <p className={styles.courseDescription}>{el.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        {intermediateCourses.data && (
          <>
            <h1 className={styles.firstLevel}>Мастер клас</h1>
            <div className={styles.curseContainer}>
              {intermediateCourses.data.map((el: Course) => (
                <Link to={`/curses/${el.id}`} key={el.id} className={styles.courseCard}>
                  <img
                    src={import.meta.env.VITE_API_BASE_IMG_URL + el.imageUrl}
                    alt={el.name}
                    className={styles.cardsImage}
                  />
                  <p className={styles.cardsName}>{el.name}</p>
                  <p className={styles.courseDescription}>{el.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
