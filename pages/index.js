import BlogItems from '@components/blogitems'
import Head from 'next/head'
import { MongoClient } from 'mongodb'

export default function Home({ blogPosts }) {
  return (
    <>
      <Head>
        <title>Next.JS crash course</title>
        <meta name='description' content='This is a next.js crash course' />
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
  const client = await MongoClient.connect(
    'mongodb+srv://farhan:keUwt3vuBbnElt8o@cluster0.afhc6.mongodb.net/nextmongo?retryWrites=true&w=majority'
  )

  const blogPostsCollection = client.db().collection('posts')

  const blogPosts = await blogPostsCollection.find().toArray()

  client.close()

  return {
    props: {
      blogPosts: blogPosts.map((blog) => ({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        id: blog._id.toString(),
        slug: blog.slug,
      })),
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
