import { Button } from './ui/button'
import { Loader } from 'lucide-react'

const LoadingButton = () => {
  return (
    <div>
        <Button disabled>
            <Loader className='mr-2 h-4 w-4 animate-spin' />
            Loading
        </Button>   
    </div>
  )
}

export default LoadingButton
