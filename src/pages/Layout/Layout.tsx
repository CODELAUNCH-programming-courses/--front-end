import React from 'react'
import cn from 'classnames'
import { Outlet } from 'react-router-dom'
import { Footer } from './components'
import { Header } from './components'

import styles from './Layout.module.css'

export const Layout: React.FC = () => {
  return (
    <div className={cn(styles.layout)}>
      <Header className={styles.header} />
      <main>
        <Outlet />
      </main>
      <Footer className={styles.footer}></Footer>
    </div>
  )
}
