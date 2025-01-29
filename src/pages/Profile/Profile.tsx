import React from 'react'
import styles from './Profile.module.css'

interface Props {
  className?: string
}

export const Profile: React.FC<Props> = ({ className }) => {
  return <div className={styles.profile}></div>
}
