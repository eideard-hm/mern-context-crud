import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { usePost } from '../hooks/usePost'
import FormFormik from '../components/FormFormik'

const initialState = {
  title: '',
  description: ''
}

const PostFom = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { createPost, getPostById, updatePost } = usePost();
  const [post, setPost] = useState(initialState);

  const handleSubmitFormik = async values => {
    if (id) {
      const [status] = await updatePost(values)
      if (status === 200) {
        navigate('/')
      }
    } else {
      const [status] = await createPost(values)
      if (status === 201) {
        navigate('/')
      }
    }
  }

  useEffect(() => {
    (async () => {
      if (id) {
        const [data, status] = await getPostById(id)
        if (status === 200) {
          setPost(data)
        } else {
          toast.error(`No se encontró ningun post asociado al id: ${id}`)
          navigate('/');
        }
      }
    })()
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black rounded">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            <IoMdArrowRoundBack size={20} />
          </Link>
        </header>

        <FormFormik post={post}
          handleSubmitFormik={handleSubmitFormik} />

      </div>
    </div>
  )
}

export default PostFom
