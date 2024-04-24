import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'/>
        </SheetTrigger>

        <SheetContent className='space-y-3'>
            <SheetTitle>
                <span>Welcome to MERN Eats..!</span>
            </SheetTitle>

            <Separator />

            <SheetDescription className='flex'>
                <Button title="btn" className='flex-1 font-bold bg-orange-500'>
                    Log In 
                </Button>
            </SheetDescription>

        </SheetContent>

    </Sheet>
  )
}

export default MobileNav