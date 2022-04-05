import { useNavigate } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { usePost } from '../hooks/usePost'

const PostCard = ({ posts }) => {
  const navigate = useNavigate()
  const { deletePost } = usePost()

  const handleDelete = id => {
    toast(
      t => (
        <div>
          <p className='text-white'>
            Do you want to delete <strong>{id}</strong>?
          </p>
          <div>
            <button
              className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'
              onClick={e => {
                deletePost(id)
                toast.dismiss(t.id)
              }}
            >
              Delete
            </button>
            <button
              className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2'
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: '4000',
        style: {
          background: '#202020'
        }
      }
    )
  }

  return (
    <div className='grid grid-cols-3 gap-2'>
      {posts.map(post => (
        <div
          key={post._id}
          className='bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer'
          onClick={() => navigate(`/post/${post._id}`)}
        >
          <div className='px-4 py-7'>
            <div className='flex justify-between'>
              <h3>
                <strong>{post.title}</strong>
              </h3>
              <button
                className='text-sm px-2 py-1 rounded-sm'
                onClick={e => {
                  e.stopPropagation()
                  handleDelete(post._id)
                }}
              >
                <FaTrashAlt size='20' className='text-red-600' />
              </button>
            </div>
            <p className='text-sm'>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostCard
