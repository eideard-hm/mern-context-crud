import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { usePost } from '../hooks/usePost'

const initalValuesForm = {
  title: '',
  description: ''
}

const PostFom = () => {
  const navigate = useNavigate()
  const { createPost } = usePost();

  const handleSubmitFormik = async values => {
    const [status, data] = await createPost(values)

    if (status === 201) {
      navigate('/')
    }
  }

  const handleValidationSchema = () => {
    return object({
      title: string()
        .required("Field title is required")
        .max(100, "The maximum number of characters is 100")
        .min(5, "The minimum number of characters is 5"),
      description: string()
        .required("Field description is required")
        .min(5, "The minimum number of characters is 5")
    })
  }

  return (
    <>
      <Formik initialValues={initalValuesForm}
        validationSchema={handleValidationSchema}
        onSubmit={handleSubmitFormik}>

        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title"
              placeholder="title..."
              className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
            <ErrorMessage name='title'
              component='p'
              className='text-red-400 text-sm' />

            <Field name="description"
              placeholder="Description..."
              className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
            <ErrorMessage name='description'
              component='p'
              className='text-red-400 text-sm' />

            <button type='submit'>Save</button>
          </Form>
        )}

      </Formik>

    </>
  )
}

export default PostFom
