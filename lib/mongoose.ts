import mongoose from 'mongoose'

const MONGODB_URI = process.env.DATABASE_URL!

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env')
}

let cached: typeof mongoose | null = null

async function dbConnect(): Promise<typeof mongoose> {
  // If already connected, return cached instance
  if (cached) {
    console.log(" ✅ cached mongo connection")
    return cached
  }

  // Connect and cache
  cached = await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  })
  
  console.log('✅ Normal mongo connection')
  return cached
}

export default dbConnect
