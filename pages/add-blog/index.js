import BlogForm from '@components/blogform'

export default function AddBlog() {
  // Send request to the backend to add a new blog
  const addBlogHandler = (data) => {
    console.log(data)
  }

  return (
    <>
      <div>Add Blog</div>
      <BlogForm addBlogHandler={addBlogHandler} />
    </>
  )
}
