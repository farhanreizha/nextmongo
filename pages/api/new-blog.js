import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  // req.method req.body
  if (req.method !== 'POST') return

  const { image, title, description, details } = req.body
  const slug = title.replace(' ', '-').toLowerCase()

  if (!image || !title || !description || !details) return

  const client = await MongoClient.connect(
    'mongodb+srv://farhan:keUwt3vuBbnElt8o@cluster0.afhc6.mongodb.net/nextmongo?retryWrites=true&w=majority'
  )

  const db = client.db()

  const postCollection = db.collection('posts')

  const result = await postCollection.insertOne({ image, title, description, details, slug })

  client.close()

  res.status(201).json({
    post: result,
    message: 'Post Created',
  })
}
