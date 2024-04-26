import { useCreateMyUser } from '@/api/MyUserApi';
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';


type Props={
    children:React.ReactNode;
}

const Auth0ProviderWithNavigate = ({children}:Props) => {
    const {createUser} = useCreateMyUser()
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if(!domain || !clientID || !redirectUri)
        throw new Error(`unable to iniatialise a redirect to auth`)


    const onRedirectCallback=(appState?:AppState, user?:User)=>{
        console.log("user", user)
        if(user?.sub && user?.email){
            createUser({auth0Id:user.sub, email:user.email})
        }
    }

  return (
   <Auth0Provider

   domain={domain}
   clientId={clientID}
    authorizationParams={{
     redirect_uri:redirectUri
    }}

    onRedirectCallback ={onRedirectCallback}
        >
        {children}
   </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
