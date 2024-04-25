import {Request, Response} from 'express';

const createCurrentUser=(req:Request, res:Response)=>{
//    check if user exits
//  if not create userMyUserRoutes.service
//  return the user object


    try {

        const {auth0Id} = req.body 
        
        
    } catch (error) {
    console.log(error)
    res.status(res.statusCode).json({message:"Error creating current User"})
        }

}


export default {
    createCurrentUser
}