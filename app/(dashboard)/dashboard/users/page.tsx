import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>

      <ul className='mt-10'>
        <li><Link href="/dashboard/users/1">USER 1</Link></li>
        <li><Link href="/dashboard/users/2">USER 2</Link></li>
        <li><Link href="/dashboard/users/3">USER 3</Link></li>
        <li><Link href="/dashboard/users/4">USER 4</Link></li>
        
      </ul>
    </div>
  )
}

export default page