import BlogItems from '@components/blogitems'
import Head from 'next/head'

const BLOG_POSTS = [
  {
    id: '1',
    slug: 'first-blog',
    title: 'First Blog',
    image:
      'https://images.unsplash.com/photo-1653605941849-e8c013bdae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'This is my firtsblog',
    details: 'Lets see more',
  },
  {
    id: '2',
    slug: 'second-blog',
    title: 'Second Blog',
    image:
      'https://images.unsplash.com/photo-1653605941849-e8c013bdae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'This is my secoundblog',
    details: 'See more detail this post',
  },
]

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
