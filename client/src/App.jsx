import { Toaster } from 'react-hot-toast'
import { PostProvider } from './context/PostContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <PostProvider>
      <AppRoutes />
      <Toaster />
    </PostProvider>
  )
}

export default App
