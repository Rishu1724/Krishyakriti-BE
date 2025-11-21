import mongoose from 'mongoose'

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String },
  content: { type: String },
  meta: { type: Object },
}, { timestamps: true })

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema)
