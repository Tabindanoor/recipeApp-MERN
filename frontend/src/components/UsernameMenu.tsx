import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'
const UsernameMenu = () => {

    const {user, logout} = useAuth0()
  return (
    <div>

        <DropdownMenu>
            <DropdownMenuTrigger
            className="flex items-center px-3 text-center font-bold hover:text-orange-500 gap-2">
            <CircleUserRound className='text-orange-500'/>
            {user?.email.split('@')[0]}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="">

            <DropdownMenuItem>

                
            <Link to="/manage-restaurant"
            className="font-bold hover:text-orange-500 ">
                Manage Restaurant
            </Link>   
            </DropdownMenuItem>



                <DropdownMenuItem>

                
                <Link to="/user-profile"
                className="font-bold hover:text-orange-500 ">
                    User Profile
                </Link>   
                </DropdownMenuItem>
                
                <Separator/>
                <DropdownMenuItem>
               
                    <Button type="button"
                    className='flex flex-1 font-bold bg-orange-500 '
                    onClick={async()=>await logout()}>
                         Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
      
    </div>
  )
}

export default UsernameMenu
