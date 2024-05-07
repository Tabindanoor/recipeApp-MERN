import { useAuth0 } from "@auth0/auth0-react"
import { useMutation } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id:string, 
    email:string
}

export const useCreateMyUser=()=>{
    const {getAccessTokenSilently} = useAuth0()


    const createMyUserRequest=async(user:CreateUserRequest)=>{

        const accessToken = await getAccessTokenSilently();

    const response = await fetch (`${API_BASE_URL}/api/my/user`,{
            method: 'POST',
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json" }
                ,body: JSON.stringify({ user })
        })

        if(!response.ok)
            throw new Error('Failed to create user')

    }
    const{
        mutateAsync: createUser,
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

type UpdateMyUserRequest ={
    name:string;
    addressLine1:string;
    city: string;
    country:string
} 
export const useUpdateMyUser=()=>{

    const {getAccessTokenSilently} = useAuth0();
    const updateMyUserRequest = async (FormData:UpdateMyUserRequest)=>{


        const accessToken = await getAccessTokenSilently(); 

        const response = await fetch (`${API_BASE_URL}/api/my/user`,{
            method: 'PUT',
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json" }
                ,body: JSON.stringify(FormData)
        })

          if(!response.ok){
            throw new Error('Failed to create user')

    }
    
        return response.json()    
        }

    const {
        mutateAsync:updateUser,
         isLoading,
          isSuccess,
          isError,
           error, 
           reset
        } = useMutation(updateMyUserRequest)


        return {updateUser, isLoading }

}