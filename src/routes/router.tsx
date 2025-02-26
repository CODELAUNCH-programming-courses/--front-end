import { createBrowserRouter } from 'react-router-dom'

import { Layout, HomePage, Subscribe, Profile, Curses, SignUp } from 'src/pages'

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
    ],
  },
])
