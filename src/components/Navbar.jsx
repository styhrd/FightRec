import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
      <div className='lg:w-[450px] bg-[#7c0000] h-[40px] rounded-lg flex items-center justify-center font-agadisma text-lg 
     text-white'>
          <div>
              <div className='flex gap-10'>
                  <Link to={'/'}>HOME</Link>
                  <Link to={'/fighters'}>FIGHTERS</Link>
                  <Link to={'/fights'}>FIGHTS</Link>
                  <Link to={'/teams'}>TEAMS</Link>
              </div>
          </div>      
    </div>
  )
}

export default Navbar