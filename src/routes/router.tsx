import { createBrowserRouter } from 'react-router-dom'

import { Layout, HomePage, Subscribe, Profile, Curses, SignUp, UserProfil } from 'src/pages'
import CourseLessonGetByID from 'src/pages/Сurses/components/CourseLessonGetByID'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/subscribe',
        element: <Subscribe />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/curses',
        element: <Curses />,
      },
      {
        path: '/singUp',
        element: <SignUp />,
      },
      {
        path: '/userProfil',
        element: <UserProfil />,
      },
      {
        path: '/curses/:id',
        element: <CourseLessonGetByID />,
      },
    ],
  },
])
