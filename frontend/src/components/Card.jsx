import React from 'react'

export default function Card({children}){
  return (
    <div className="p-6 rounded-lg shadow-sm" style={{backgroundColor:'#E7E1C6'}}>
      {children}
    </div>
  )
}
