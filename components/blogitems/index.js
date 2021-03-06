/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

const BlogItems = ({ image, title, description, details, slug }) => {
  const router = useRouter()

  const onNavigate = () => {
    router.push(`/${slug}`)
  }

  return (
    <>
      {!details ? (
        <div className='max-w-sm mx-auto overflow-hidden rounded shadow-lg'>
          <img className='w-full h-60' src={image} alt={title} />
          <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold'>{title}</div>
            <p className='text-base text-gray-700'>{description}</p>
          </div>

          <div className='text-center'>
            <button
              onClick={onNavigate}
              className='px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent trnasition duration-500 ease-in-out'
            >
              Read More...
            </button>
          </div>
        </div>
      ) : (
        <div className='m-10 '>
          <div className='mb-2 text-xl font-bold'>{title}</div>
          <img className='h-60' src={image} alt={title} />
          <p className='text-base text-gray-700'>{description}</p>
          {details && <p className='text-purple-400 text-base'>{details}</p>}
        </div>
      )}
    </>
  )
}
export default BlogItems
