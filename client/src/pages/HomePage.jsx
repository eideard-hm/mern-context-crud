import { NavLink } from 'react-router-dom'
import { VscEmptyWindow } from 'react-icons/vsc'
import { FaPlus} from 'react-icons/fa'
import { usePost } from '../hooks/usePost'
import PostCard from '../components/PostCard';

const HomePage = () => {
  const { getPosts } = usePost();
  const posts = [] = getPosts()

  return (
    <div>
      {posts.length === 0
        ?
        <div className='flex flex-col justify-center items-center'>
          <VscEmptyWindow width='48' height='48' color='white' />
          <h1 className='text-white text-2xl'>There are no post</h1>
        </div>
        :
        <div>
          <div className='py-2'>
            <NavLink to="/post" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-zinc-800 font-semibold hover:text-zinc-400 hover:border-zinc-400 mt-4 lg:mt-0">
              <FaPlus size={20} />
            </NavLink>
          </div>
          <PostCard posts={posts} />
        </div>
      }
    </div>
  )
}

export default HomePage
