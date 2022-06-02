import { useRouter } from 'next/router'
import { MongoClient } from 'mongodb'

export default function BlogDetail(props) {
  const router = useRouter()

  console.log(props)

  return <h1>The Blog Detail Page</h1>
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
      title: blogPosts.title,
      description: blogPosts.description,
      details: blogPosts.details,
      image: blogPosts.image,
    },
  }
}
