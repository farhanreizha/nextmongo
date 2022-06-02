import BlogForm from '@components/blogform'

export default function AddBlog() {
  // Send request to the backend to add a new blog
  const addBlogHandler = async (data) => {
    const response = await fetch('api/new-blog', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })

    const resData = await response.json()

    console.log(resData)
  }

  return (
    <>
      <div>Add Blog</div>
      <BlogForm addBlogHandler={addBlogHandler} />
    </>
  )
}
