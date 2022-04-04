import { NavLink } from 'react-router-dom'
import { VscEmptyWindow } from 'react-icons/vsc'
import { usePost } from '../hooks/usePost'

const HomePage = () => {
  const { getPosts } = usePost();
  const posts = [] = getPosts()

  return (
    <div>
      HomePage
      <hr />
      {posts.length === 0
        ?
        <div className='flex flex-col justify-center items-center'>
          <VscEmptyWindow width='48' height='48' color='white' />
          <h1 className='text-white text-2xl'>There are no post</h1>
        </div>
        :
        <div className='text-white'>
          <NavLink to="/post">Create new Post</NavLink>
          <ul>
            {posts.map(post => (
              <li key={post._id}>{post.title}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default HomePage
