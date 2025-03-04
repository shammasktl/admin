import React from 'react'
import Users from '../Users'

const Count = () => {
  return (
    <div className='flex flex-row gap-4'>
      <Users title="Total Users" value={1000} />
      <Users title="Active Users" value={500} />
      <Users title="Total Subscribers" value={15255} />
      <Users title="Total Revenue" value={100000} />
    </div>
  )
}

export default Count
