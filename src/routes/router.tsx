import { createBrowserRouter } from 'react-router-dom'

import { Layout, HomePage, Subscribe, Profile } from 'src/pages'

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
        path: 'subscribe',
        element: <Subscribe />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])
