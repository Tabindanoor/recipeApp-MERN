import { useCreateMyUser } from '@/api/MyUserApi';
import { AppState, Auth0Provider, User, useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


type Props={
    children:React.ReactNode;
}

const Auth0ProviderWithNavigate = ({children}:Props) => {
    const {createUser} = useCreateMyUser()
    const {getAccessTokenSilently}  = useAuth0()
    const navigate = useNavigate()
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if(!domain || !clientID || !redirectUri || !audience)
        {
                 throw new Error(`unable to iniatialise a redirect to auth`)
   
        }


    const onRedirectCallback=(appState?:AppState, user?:User)=>{
        console.log("user", user)
        // if(user?.sub && user?.email){
        //     createUser({auth0Id:user.sub, email:user.email})
        // }
        // const Token = await getAccessTokenSilently()

        navigate("/auth-callback")
         

    }

  return (
   <Auth0Provider

   domain={domain}
   clientId={clientID}
    authorizationParams={{
     redirect_uri:redirectUri,
     audience
    }}

    onRedirectCallback ={onRedirectCallback}
        >
        {children}
   </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
