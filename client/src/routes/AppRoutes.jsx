import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PostFom from '../pages/PostFom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar branch='Edier H.' />
      <div className='bg-neutral-900 min-h-screen flex items-center justify-center'>
        <div className='px-10 container m-auto py-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/post' element={<PostFom />} />
            <Route path='/post/:id' element={<PostFom />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  )
}

export default AppRoutes
