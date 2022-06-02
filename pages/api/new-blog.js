import { MongoClient } from 'mongodb'

function handler(req, res) {
  // req.method, req.body
  if (req.method !== 'POSTS') return

  const { image, title, description, details } = req.body
  const slug = title.toLowerCase()

  if (!image || !title || !description || !details) return

  const client = MongoClient.connect(
    'mongodb+srv://farhan:ctmdu3PvMD9AgpMX@cluster0.afhc6.mongodb.net/nextmongo?retryWrites=true&w=majority'
  )

  const db = client.db()

  const postCollection = db.collection('posts')

  const result = postCollection.insertOne({ image, title, description, details })

  client.close()

  res.status(201).json({
    post: result,
    message: 'Post Created',
  })
}

export default handler
