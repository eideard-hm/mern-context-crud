import { PostProvider } from './context/PostContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <PostProvider>
      <div className='bg-neutral-900 min-h-screen flex items-center justify-center'>
        <AppRoutes />
      </div>
    </PostProvider>
  )
}

export default App
