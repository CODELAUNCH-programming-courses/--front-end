import React from 'react'
import cn from 'classnames'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.css'

export const Layout: React.FC = () => {
  return (
    <div className={cn(styles.layout)}>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}
