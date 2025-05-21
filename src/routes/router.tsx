import { createBrowserRouter } from 'react-router-dom'

import { Layout, HomePage, Subscribe, Profile, Courses, SignUp, UserProfil } from 'src/pages'
import CourseLessonGetByID from 'src/pages/Courses/components/CourseLessonGetByID'
import ProtectedRedirect from 'src/pages/ProtectedRedirect'

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
        path: '/profile', // <-- головна точка переходу
        element: <ProtectedRedirect />,
      },
      {
        path: '/profile/sign-in', // <-- твоя форма логіну
        element: <Profile />, // <-- твоя форма входу
      },
      {
        path: '/curses',
        element: <Courses />,
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
