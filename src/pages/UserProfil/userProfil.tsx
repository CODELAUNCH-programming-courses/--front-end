import React, { useEffect, useState, useRef } from 'react'
import styles from './userProfil.module.css'
import { Settings, Keyboard, LogOut, LayoutDashboard, Flame, PanelsRightBottom, Zap, Pen } from 'lucide-react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useGetCourses } from '../Courses/hooks/useGetCourses'
import { Button } from 'src/components/ui'

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
  const [searchParams] = useSearchParams()
  const [avatar, setAvatar] = useState<string>('/default_user.png')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
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
    }
  }, [navigate])

  const handleEditClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
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
            <Link to='?mode=keyboard'>
              <Keyboard className={styles.icon} size={24} />
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              {' '}
              <LogOut className={`${styles.icon} ${styles.buttonLogOut}`} size={24} />{' '}
            </button>
          </div>
          <img src={avatar} className={styles.defaultImage} alt='user avatar' />
          <p className={styles.userEmail}>{userEmail}</p>
          <p className={styles.userId}>user_{userId}</p>
          <div className={styles.navigate}>
            <Link to='?mode=home' className={styles.text_flex}>
              <LayoutDashboard className={styles.dashbord} />
              <p>Дім</p>
            </Link>
          </div>
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
                  <input type='text' name='changeUserEmail' placeholder='Email' className={styles.changeUserEmail} />
                  <input
                    type='text'
                    name='changeUserPassword'
                    placeholder='Password'
                    className={styles.changeUserPassword}
                  />
                </div>
                <div className={styles.userEditIcon}>
                  <img src={avatar} alt='Avatar' className={styles.userImage} />
                  <button type='button' className={styles.btnEdit} onClick={handleEditClick}>
                    <Pen className={styles.editIcon} />
                  </button>
                  <input
                    type='file'
                    id='file'
                    data-testid='file-input'
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </>
          )}
          {mode === 'home' && <p>Home</p>}
          {mode === 'intensity' && (
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
          {mode === 'projects' && (
            <>
              <h1 className={styles.textOfintensity}>Проєкти</h1>
              <p className={`${styles.textOfintensity} ${styles.anotherStyle}`}>
                Тут ви побачете як створюються проєкти з нуля
              </p>
            </>
          )}
          {mode === 'courses' && (
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
        </div>
      </div>
    </div>
  )
}
