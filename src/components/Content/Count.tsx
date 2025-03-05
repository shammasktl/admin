import Users from '../Users'

const Count = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      <Users title="Total Users" value={1000} />
      <Users title="Active Users" value={500} />
      <Users title="Total Subscribers" value={15255} />
      <Users title="Total Revenue" value={100000} />
    </div>
  )
}

export default Count
