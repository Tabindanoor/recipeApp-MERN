import { useCreateMyUser } from '@/api/MyUserApi'
import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const AuthCallbackPage = () => {

    const hasCreatedUser = useRef(false);
    const navigate = useNavigate(); 
    const {user } = useAuth0()
    const {createUser} = useCreateMyUser()

    useEffect(() => {
      
        if(user?.sub && user?.email && !hasCreatedUser.current){
            createUser({auth0Id:user.sub, email:user.email})
            hasCreatedUser.current = true
        }

        navigate("/");

      return () => {
        <>
        Loading....!
        </>
      }
    }, [createUser, navigate, user])
    

  return (
    <div>
      
    </div>
  )
}

export default AuthCallbackPage
