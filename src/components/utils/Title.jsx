import React from 'react'

export const Title = ({title}) => {
    
  return (
    <div className="grid items-center">
        <h1 className="text-5xl lg:text-4xl md:text-4xl font-bold text-slate-900 filter drop-shadow-lg">{title}</h1>
    </div>
  )
}
