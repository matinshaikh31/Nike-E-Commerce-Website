import React from 'react'

const SocialLink = ({icon}) => {
  return (
    <div>
    
        <img
            src={icon}
            alt='icon/social'
            className="w-8 h-8 flex items-center cursor-pointer md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
        />
        
    </div>
  )
}

export default SocialLink