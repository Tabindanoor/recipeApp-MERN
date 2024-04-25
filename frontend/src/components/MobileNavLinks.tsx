import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const MobileNavLinks = () => {
    const {logout }= useAuth0()
  return (
    <div>
      <Link to='/user-profile'
      className='flex bg-white font-bold hover:text-orange-500'>
        User Profile 
      </Link>

        <Button
        onClick={async()=>await logout()}
        className="flex flex-1 w-full items-center px-3 mt-4 text-center hover:bg-gray-500">
            Log Out 
        </Button>

    </div>
  )
}

export default MobileNavLinks
