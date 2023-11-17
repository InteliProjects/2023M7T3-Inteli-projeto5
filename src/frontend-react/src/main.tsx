import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'

import ErrorPage from './pages/ErrorPage'
import Result from './pages/Result'
import Context from './pages/Context'
import ContextProvider from './context/context'
import SwitchButton from './pages/SwitchButton'
import MainFaq from './pages/MainFaq'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Context />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SwitchButton />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: '/faq',
        element: <MainFaq />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
