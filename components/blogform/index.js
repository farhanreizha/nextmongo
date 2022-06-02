import Input from './Input'
import { useRef } from 'react'

const BlogForm = ({ addBlogHandler }) => {
  // title, image, description, details
  const titleRef = useRef()
  const imageRef = useRef()
  const descriptionRef = useRef()
  const detailRef = useRef()

  const formSubmit = (e) => {
    e.preventDefault()

    const formData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      details: detailRef.current.value,
    }
    addBlogHandler(formData)
  }

  return (
    <form className='max-w-lg w-full mx-auto' onSubmit={formSubmit}>
      <div className='flex flex-wrap -mx-3 mb-6 my-8'>
        <Input name='title' type='text' refs={titleRef} />
        <Input name='image' type='text' refs={imageRef} />
        <Input name='description' type='text' refs={descriptionRef} />
        <Input name='details' type='text' refs={detailRef} />
      </div>
      <button
        type='submit'
        className='px-4 py-2 -mx-3 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent trnasition duration-500 ease-in-out'
      >
        Submit
      </button>
    </form>
  )
}
export default BlogForm
