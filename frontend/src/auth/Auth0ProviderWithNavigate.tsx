import React from 'react'


type Props={
    children:React.ReactNode;
}

const Auth0ProviderWithNavigate = ({children}:Props) => {

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if(!redirectUri || !redirectUri || !redirectUri)
        throw new Error(`unable to iniatialise a redirect to auth`)

  return (
    <div>
      
    </div>
  )
}

export default Auth0ProviderWithNavigate
