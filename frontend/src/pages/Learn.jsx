import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { Link, useNavigate } from 'react-router-dom'

export default function Learn(){
  const navigate = useNavigate()
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-accent hover:opacity-90 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back</span>
        </button>
      </div>

      <h2 className="text-3xl font-semibold mb-4" style={{color:'#3C3B35'}}>Learn Center</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold mb-2" style={{color:'#3C3B35'}}>Crop Basics</h3>
          <p className="text-sm text-gray-700 mb-4">Short intro about crops, cultivation and detection using our AI models.</p>
          <Button>Read more</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-2" style={{color:'#3C3B35'}}>Soil & Nutrition</h3>
          <p className="text-sm text-gray-700 mb-4">Guidance on soil health and organic nutrition best practices.</p>
          <Button variant="secondary">Explore</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-2" style={{color:'#3C3B35'}}>Pest Management</h3>
          <p className="text-sm text-gray-700 mb-4">Learn how to identify and mitigate common pests.</p>
          <Button>Read more</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-2" style={{color:'#3C3B35'}}>AI Diagnosis</h3>
          <p className="text-sm text-gray-700 mb-4">See how our model analyses crop images and suggests steps.</p>
          <Button variant="primary">Try Demo</Button>
        </Card>
      </div>
    </div>
  )
}
