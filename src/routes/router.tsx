import { createBrowserRouter } from 'react-router-dom'

import { Layout, HomePage } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])
