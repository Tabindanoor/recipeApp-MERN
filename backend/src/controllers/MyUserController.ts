import {Request, Response} from 'express';
import User from '../models/user';

const createCurrentUser=async(req:Request, res:Response)=>{
//    check if user exits
//  if not create userMyUserRoutes.service
//  return the user object


    try {

        const {auth0Id} = req.body 
        const existingUser = await User.findOne({auth0Id})
        if(existingUser)
            {
            return res.send(200).send()
            }

        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).send(newUser.toObject())

    } catch (error) {
    console.log(error)
    res.status(res.statusCode).json({message:"Error creating current User"})
        }

}


export default {
    createCurrentUser
}