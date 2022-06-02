import { MongoClient } from 'mongodb'
import BlogItems from '@components/blogitems'

export default function BlogDetail({ blog: { title, description, image, details } }) {
  return (
    <>
      <div className='flex flex-col'>
        <BlogItems title={title} description={description} image={image} details={details} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://farhan:keUwt3vuBbnElt8o@cluster0.afhc6.mongodb.net/nextmongo?retryWrites=true&w=majority'
  )

  const blogPostsCollection = client.db().collection('posts')

  const blogPosts = await blogPostsCollection.find({}, { slug: 1 }).toArray() // Only return the SLUG

  client.close()

  return {
    paths: blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const blogID = context.params.slug

  const client = await MongoClient.connect(
    'mongodb+srv://farhan:keUwt3vuBbnElt8o@cluster0.afhc6.mongodb.net/nextmongo?retryWrites=true&w=majority'
  )

  const blogPostsCollection = client.db().collection('posts')

  const blogPosts = await blogPostsCollection.findOne({ slug: blogID }) // Only return the SLUG

  client.close()

  return {
    props: {
      blog: {
        title: blogPosts.title,
        description: blogPosts.description,
        details: blogPosts.details,
        image: blogPosts.image,
      },
    },
  }
}
