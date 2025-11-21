import dotenv from 'dotenv'
import { connectDB } from './index.js'
import Resource from '../models/Resource.js'

dotenv.config()

const resources = [
  {
    title: 'Multicropping',
    slug: 'multicropping',
    summary: 'Growing two or more crops in the same field in a season.',
    content: 'Detailed guidance on multicropping, combinations and best practices.'
  },
  {
    title: 'Agroforestry',
    slug: 'agroforestry',
    summary: 'Integrating trees with crops.',
    content: 'Types of agroforestry systems, benefits and how to implement.'
  },
  {
    title: 'Market Information',
    slug: 'market',
    summary: 'Sources and market information for crops.',
    content: 'Where to find market rates and how to interpret them.'
  }
]

async function seed(){
  const { MONGO_URI } = process.env
  if(!MONGO_URI){
    console.error('MONGO_URI not set in environment. Copy .env.example to .env and set it.')
    process.exit(1)
  }
  await connectDB(MONGO_URI)
  try{
    for(const r of resources){
      const exists = await Resource.findOne({slug: r.slug})
      if(!exists){
        await Resource.create(r)
        console.log('Inserted', r.slug)
      } else {
        console.log('Skipped existing', r.slug)
      }
    }
  }catch(err){
    console.error('Seeding error', err)
  } finally {
    process.exit(0)
  }
}

seed()
