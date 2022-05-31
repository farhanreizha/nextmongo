import Input from './Input'
import FORMS from '@shared/forms'

const BlogForm = () => {
  // title, image, description, details
  return (
    <form className='max-w-lg w-full mx-auto'>
      {FORMS.map((form) => (
        <div key={form.name} className='flex flex-wrap -mx-3 mb-6 my-8'>
          <Input name={form.name} type={form.type} />
        </div>
      ))}
      <button
        // onClick={onNavigate}
        className='px-4 py-2 -mx-3 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent trnasition duration-500 ease-in-out'
      >
        Submit
      </button>
    </form>
  )
}
export default BlogForm
