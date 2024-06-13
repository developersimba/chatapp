import React from 'react'
import user from "../assets/user.png"
import happy from "../assets/happy.png"

const Rightbar = () => {
  return (
    <div className='w-screen h-screen'>
<div className='flex'>
     <img src={user} className='w-9 h-9 ml-4 mt-2'/>
     <h1 className='ml-4 mt-3 font-medium'>Salton Morris</h1>
    </div>
    <div className='rounded-lg bg-gray-100 h-20  mt-32 w-32 text-center  flex'>
        <img src={user} className='w-7 h-7' />
      <h1>how are you</h1>
    </div>
    <div className='rounded-lg bg-gray-100 h-20  mt-32 w-32 text-center '>
    <img src={user} className='w-7 h-7' />
      <h1>i am fine</h1>
    </div>
    <div className='bg-zinc-200 h-40 pt-10 pl-5 mt-3 relative'>
        <div className='flex bg-white p-1 border border-black'>
        <img src={happy} className='w-7 h-7'/>
        <input placeholder='Type your message' className='ml-4 mb-4'/>
        </div>
    </div>
    </div>
    
  )
}

export default Rightbar
