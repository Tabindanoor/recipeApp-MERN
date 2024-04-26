import { useMutation } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id:string, 
    email:string
}

export const useCreateMyUser=()=>{

    const createMyUserRequest=async(user:CreateUserRequest)=>{
        const response = await fetch (`${API_BASE_URL}/api/my/user`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json" }
                ,body: JSON.stringify({ user })
        })

        if(!response)
            throw new Error('Server error')

    }

    
    const{
        mutateAsync:
            createUser,
            isLoading, 
            isSuccess,
            isError
        } = useMutation(createMyUserRequest)
    

        return {
            createUser ,
            isLoading,
            isSuccess,
            isError 
        }
 
}