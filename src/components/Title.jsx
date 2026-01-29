import React from 'react'

const Title = ({title,description}) => {
  return (
    <div>
      <h1 className="text-center text-3xl sm:text-5xl font-medium mb-6 dark:text-white ">{title}</h1>
      <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">{description}</p>
    </div>
  )
}

export default Title
