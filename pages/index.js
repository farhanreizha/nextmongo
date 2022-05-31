import BlogItems from '@components/blogitems'
import Head from 'next/head'
import BLOG_POSTS from '@shared/blog-posts'

export default function Home({ blogPosts }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Blog Page</h1>
      <div className='flex flex-col justify-center'>
        {blogPosts.map((item) => (
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

export async function getStaticProps(context) {
  // Send request to a backend api
  // Read this fs .....
  // Securely connect to a database

  return {
    props: {
      blogPosts: BLOG_POSTS,
    },
    revalidate: 3600, // Every hour 10, 60
  }
}

// export async function getServerSideProps(context) {
//   const { req, res } = context
//   // Give you access to the incoming request, headers etc
//   // Send request to a backend api
//   // Read this fs .....
//   // Securely connect to a database
//   return {
//     props: {
//       blogPosts: BLOG_POSTS,
//     },
//   }
// }
