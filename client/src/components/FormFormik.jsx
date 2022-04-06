import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const FormFormik = ({ post, handleSubmitFormik }) => {

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
        <Formik initialValues={post}
            validationSchema={handleValidationSchema}
            onSubmit={handleSubmitFormik}
            enableReinitialize={true}>

            {({ isSubmitting, handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <label
                        htmlFor="title"
                        className="text-sm block font-bold mb-2 text-gray-400">
                        Title
                    </label>
                    <Field name="title"
                        placeholder="Title..."
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                    <ErrorMessage name='title'
                        component='p'
                        className='text-red-400 text-sm' />

                    <label
                        htmlFor="description"
                        className="text-sm block font-bold mb-2 text-gray-400">
                        Description
                    </label>
                    <Field name="description"
                        placeholder="Description..."
                        component="textarea"
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                    <ErrorMessage name='description'
                        component='p'
                        className='text-red-400 text-sm' />

                    <label
                        htmlFor="image"
                        className="text-sm block font-bold mb-2 text-gray-400">
                        Image
                    </label>
                    <input type="file"
                        name="image"
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                        onChange={(e) => setFieldValue('image', e.target.files[0])}
                    />

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 mb-2 text-white focus:outline-none disabled:bg-indigo-400"
                        disabled={isSubmitting} >
                        {isSubmitting
                            ?
                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                            :
                            "Save"
                        }
                    </button>
                </Form>
            )}

        </Formik>
    )
}

export default FormFormik