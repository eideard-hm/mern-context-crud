import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PostFom from '../pages/PostFom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='bg-red-100 container px-10 m-auto'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post' element={<PostFom />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes
