import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import PostCard from '../components/PostCard'

const Posts = ({ posts }) => {
  return (
    <>
      <div className='py-2 flex justify-between items-center'>
        <h1 className='text-white font-semibold text-lg'>Posts (<strong className='text-red-300'>{posts.length}</strong>)</h1>
        <NavLink
          to='/post'
          className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-zinc-800 font-semibold hover:text-zinc-400 hover:border-zinc-400 mt-4 lg:mt-0'
        >
          <FaPlus size={20} />
        </NavLink>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        <PostCard />
      </div>
    </>
  )
}

export default Posts
