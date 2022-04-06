import { useNavigate } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { usePost } from '../hooks/usePost'
import { NO_IMAGE_AVAILABLE } from '../utils/config'

const PostCard = () => {
  const navigate = useNavigate()
  const { getPosts, deletePost } = usePost()
  const posts = ([] = getPosts())

  const customToastDelete = id => {
    toast(
      t => (
        <div>
          <p className='text-white mb-2'>
            Do you want to delete <strong>{id}</strong>?
          </p>
          <div>
            <button
              className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'
              onClick={() => handleDelete(id, t.id)}
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

  const handleDelete = async (id, toastId) => {
    await deletePost(id)
    toast.dismiss(toastId)
    toast.success(`Post ${id} deleted successfully`)
  }

  return (
    <>
      {posts.map(post => (
        <div
          key={post._id}
          className='bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer'
          onClick={() => navigate(`/post/${post._id}`)}
        >
          <div className='px-4 py-7'>
            <div className='flex justify-between items-center mb-2'>
              <h3>
                <strong>{post.title}</strong>
              </h3>
              <button
                className='text-sm px-2 py-1 rounded-sm'
                onClick={e => {
                  e.stopPropagation()
                  customToastDelete(post._id)
                }}
              >
                <FaTrashAlt size='20' className='text-red-600' />
              </button>
            </div>
            <hr />
            <p className='text-sm mt-2'>{post.description}</p>
          </div>
          {post.image
            ?
            <img
              src={post.image.url}
              alt={post.title}
              className='object-cover h-40 w-100 m-auto mb-4 rounded'
            />
            :
            <img src={NO_IMAGE_AVAILABLE}
              alt={post.title}
              className='object-cover h-40 w-100 m-auto mb-4 rounded' />}
        </div>
      ))}
    </>
  )
}

export default PostCard
