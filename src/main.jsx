import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './assets/Routes/Routes.jsx'
import AuthProvider from './assets/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>

  </StrictMode>,
)
