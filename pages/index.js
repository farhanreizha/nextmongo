import BlogItems from '@components/blogitems'
import Head from 'next/head'
import BLOG_POSTS from '@shared/blog-posts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Blog Page</h1>
      <div className='flex flex-col justify-center'>
        {BLOG_POSTS.map((item) => (
          <div key={item.id} className='m-2'>
            <BlogItems
              title={item.title}
              image={item.image}
              description={item.description}
              details={item.details}
              slug={item.slug}
            />
          </div>
        ))}
      </div>
    </>
  )
}
