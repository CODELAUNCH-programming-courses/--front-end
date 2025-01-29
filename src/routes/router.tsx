import { createBrowserRouter } from 'react-router-dom'

import { Layout, HomePage, Subscribe, Profile, Curses } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Curses />,
      },
      {
        path: 'subscribe',
        element: <Subscribe />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '/homepage',
        element: <HomePage />,
      },
    ],
  },
])
