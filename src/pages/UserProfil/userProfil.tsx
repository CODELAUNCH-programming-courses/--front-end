import React, { useEffect, useState, useRef } from 'react'
import styles from './userProfil.module.css'
import { Settings, LogOut, Pen, Flame, PanelsRightBottom, Zap } from 'lucide-react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useGetCourses } from '../Courses/hooks/useGetCourses'

interface Props {
  className?: string
}

export interface Course {
  id: number
  name: string
  description: string
  imageUrl: string
}

export const UserProfil: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [userName, setUserName] = useState<string>('') // новий стейт для UserName
  const [searchParams] = useSearchParams()
  const [avatar, setAvatar] = useState<string>('/default_user.png')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const tariff = localStorage.getItem('tariff')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('tariff')
    navigate('/')
  }

  const { data: beginnerCourses, isError: beginnerError, isPending: beginnerPending } = useGetCourses('Beginner')
  const {
    data: intermediateCourses,
    isError: intermediateError,
    isPending: intermediatePending,
  } = useGetCourses('Intermediate')
  const { data: advancedCourses, isError: advancedError, isPending: advancedPending } = useGetCourses('Advanced')

  const mode = searchParams.get('mode')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const id = localStorage.getItem('id')
    if (!token) {
      navigate('/signUp')
    }
    if (email) {
      setUserEmail(email)
    }
    if (id) {
      setUserId(id)
      setUserName(`user_${id}`) // спочатку зробимо UserName із id, або можна по-іншому
    }
  }, [navigate])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }

  // Обробник зміни полів інпутів
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'changeUserEmail') {
      setUserEmail(value)
    }
    if (name === 'changeUserName') {
      setUserName(value)
    }
  }

  // Обробник натискання кнопки "Прийняти"
  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const userNameFromStorage = localStorage.getItem('userName')
    const id = localStorage.getItem('id')

    if (!token) {
      navigate('/signUp')
    }
    if (email) {
      setUserEmail(email)
    }
    if (userNameFromStorage) {
      setUserName(userNameFromStorage)
    } else if (id) {
      setUserName(`user_${id}`) // дефолтне ім'я
    }
  }, [navigate])

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:3004/api/v1/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          accept: '*/*',
        },
        body: JSON.stringify({
          id: Number(userId),
          username: userName,
          email: userEmail,
        }),
      })

      if (!response.ok) {
        throw new Error('Помилка оновлення')
      }

      // Після успішного оновлення — зберігаємо в localStorage
      localStorage.setItem('email', userEmail)
      localStorage.setItem('userName', userName)

      alert('Дані успішно оновлені!')
    } catch (err: any) {
      setError(err.message || 'Щось пішло не так')
    } finally {
      setLoading(false)
    }
  }

  if (beginnerError || intermediateError || advancedError) {
    return <p>Server error</p>
  }

  if (beginnerPending || intermediatePending || advancedPending) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      <div className={styles.infospace}>
        <div className={styles.lefSideBar}>
          <div className={styles.topIcons}>
            <Link to='?mode=settings'>
              <Settings className={styles.icon} size={24} />
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <LogOut className={`${styles.icon} ${styles.buttonLogOut}`} size={24} />
            </button>
          </div>
          <img src={avatar} className={styles.defaultImage} alt='user avatar' />
          <p className={styles.userEmail}>{userEmail}</p>
          <p className={styles.userId}>{userName.startsWith('user_') ? userName : `user_${userName}`}</p>
          <div className={styles.navigate}>
            <Link to='?mode=intensity' className={styles.text_flex}>
              <Flame className={styles.flame} />
              <p>Інтенсивність</p>
            </Link>
          </div>
          <div className={styles.navigate}>
            <Link to='?mode=projects' className={styles.text_flex}>
              <PanelsRightBottom className={styles.rightBottom} />
              <p>Проєкти</p>
            </Link>
          </div>
          <div className={styles.navigate}>
            <Link to='?mode=courses' className={styles.text_flex}>
              <Zap className={styles.zap} />
              <p>Мастер класи</p>
            </Link>
          </div>
        </div>

        <div className={styles.rightSideInfo}>
          {mode === 'settings' && (
            <>
              <h1 className={styles.settingsHeader}>Settings</h1>
              <div className={styles.editUser}>
                <div className={styles.settingsInputs}>
                  <input
                    type='text'
                    name='changeUserEmail'
                    placeholder='Email'
                    className={styles.changeUserEmail}
                    value={userEmail}
                    onChange={handleInputChange}
                  />
                  <input
                    type='text'
                    name='changeUserName'
                    placeholder='UserName'
                    className={styles.changeUserPassword}
                    value={userName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.userEditIcon}>
                  <input
                    type='file'
                    id='file'
                    data-testid='file-input'
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
                <button className={styles.btnAplly} onClick={handleSubmit} disabled={loading}>
                  {loading ? 'Завантаження...' : 'Прийняти'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            </>
          )}

          {mode === 'intensity' && (
            <>
              {tariff === 'null' ? (
                <h1>Потрібно оплатити підписку</h1>
              ) : (
                <>
                  <h1 className={styles.textOfintensity}>Інтенсиви</h1>
                  <p className={`${styles.textOfintensity} ${styles.anotherStyle}`}>
                    Тут ви швидко зможете вивчити любу технологію
                  </p>
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
            </>
          )}
          {mode === 'projects' && (
            <>
              {tariff === 'null' ? (
                <h1>Потрібно оплатити підписку</h1>
              ) : (
                <>
                  <h1 className={styles.textOfintensity}>Проєкти</h1>
                  <p className={`${styles.textOfintensity} ${styles.anotherStyle}`}>
                    Тут ви побачите як створюються проєкти з нуля
                  </p>
                </>
              )}
            </>
          )}

          {mode === 'courses' && (
            <>
              {tariff === 'null' ? (
                <h1>Потрібно оплатити підписку</h1>
              ) : (
                <>
                  <h1 className={styles.textOfintensity}>Мастер-класи</h1>
                  <p className={`${styles.textOfintensity} ${styles.anotherStyle}`}>
                    Тут ви знайдете цінні знання які, пригодяться для вашого проєкту
                  </p>
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
