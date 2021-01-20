import React from 'react'

const Card = ({ title, value }) => {
  return (
    <div className='o-row'>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default Card
