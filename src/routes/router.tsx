import { createBrowserRouter } from 'react-router-dom'

import { Layout, Home } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
