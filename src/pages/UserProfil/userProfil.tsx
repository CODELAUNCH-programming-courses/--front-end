import React from 'react'
import styles from './userProfil.module.css'
import { Settings, Keyboard, LogOut, LayoutDashboard, Flame, PanelsRightBottom, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
interface Props {
  className?: string
}

export const UserProfil: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infospace}>
        <div className={styles.lefSideBar}>
          <div className={styles.topIcons}>
            <Settings className={styles.icon} size={24} />
            <Keyboard className={styles.icon} size={24} />
            <LogOut className={styles.icon} size={24} />
          </div>
          <img src='/default_user.png' className={styles.defaultImage} alt='' />
          <div className={styles.navigate}>
            <Link to='' className={styles.text_flex}>
              <LayoutDashboard className={styles.dashbord} />
              <p> Дім</p>
            </Link>
          </div>
          <div className={styles.navigate}>
            <Link to='' className={styles.text_flex}>
              <Flame className={styles.flame} />
              <p>Інтенсивність</p>
            </Link>
          </div>
          <div className={styles.navigate}>
            <Link to='' className={styles.text_flex}>
              <PanelsRightBottom className={styles.rightBottom} />
              <p> Проєкти</p>
            </Link>
          </div>
          <div className={styles.navigate}>
            <Link to='' className={styles.text_flex}>
              <Zap className={styles.zap} />
              <p> Мастер класи</p>
            </Link>
          </div>
        </div>
        <div className={styles.rightSideInfo}></div>
      </div>
    </div>
  )
}
