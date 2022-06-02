import BlogForm from '@components/blogform'
import { useRouter } from 'next/router'

export default function AddBlog() {
  const router = useRouter()
  // Send request to the backend to add a new blog
  const addBlogHandler = async (data) => {
    const response = await fetch('api/new-blog', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })

    const resData = await response.json()

    router.push('/')
  }

  return <BlogForm addBlogHandler={addBlogHandler} />
}
