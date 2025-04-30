import React, { useEffect, useState } from 'react'
import styles from './userProfil.module.css'
import { Settings, Keyboard, LogOut, LayoutDashboard, Flame, PanelsRightBottom, Zap } from 'lucide-react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
interface Props {
  className?: string
}

export const UserProfil: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  console.log('mode:', mode)

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
            <Link to='/'>
              <LogOut className={styles.icon} size={24} />
            </Link>
          </div>
          <img src='/default_user.png' className={styles.defaultImage} alt='' />
          <p className={styles.userEmail}>{userEmail}</p>
          <p className={styles.userId}> user_{userId}</p>
          <div className={styles.navigate}>
            <Link to='?mode=home' className={styles.text_flex}>
              <LayoutDashboard className={styles.dashbord} />
              <p> Дім</p>
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
              <h1 className={styles.settingsHeader}> Settings</h1>
              <div className={styles.settingsInputs}>
                <input
                  type='text'
                  name='changeUserEmail'
                  placeholder='Email'
                  className={styles.changeUserEmail}
                  id=''
                />
                <input
                  type='text'
                  name='changeUserPassword'
                  placeholder='Password'
                  className={styles.changeUserPassword}
                  id=''
                />
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
