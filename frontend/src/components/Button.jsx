import React from 'react'

export default function Button({children, variant='primary', ...props}){
  const base = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  if(variant === 'primary'){
    return (
      <button {...props} className={`${base} bg-primary text-white hover:bg-[#0aa786] focus:ring-primary/50`}>
        {children}
      </button>
    )
  }
  if(variant === 'secondary'){
    return (
      <button {...props} className={`${base} bg-stonetone text-textprimary hover:brightness-95`}>
        {children}
      </button>
    )
  }
  return (
    <button {...props} className={`${base} bg-gray-200 text-textprimary hover:brightness-95`}>
      {children}
    </button>
  )
}
