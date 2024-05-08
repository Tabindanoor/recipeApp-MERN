import {auth } from "express-oauth2-jwt-bearer"
import {Request, Response, NextFunction} from "express"
import jwt  from "jsonwebtoken";
import User from "../models/user";



// const jwtCheck = auth({
//   audience: 'mern-food-ordering-app-api',
//   issuerBaseURL: 'https://dev-0dzj2k2k5x20yucf.us.auth0.com/',
//   tokenSigningAlg: 'RS256'
// });

declare global {
  namespace Express{
    interface Request{
      userId:string;
      auth0Id:string
    }
  }
}

// these are the middleware functions


// we get these packages from the auth0 package.
//  We use this to verify that a token is valid
//  and that the token is not expired and that the token 
// and make sure that it comes from the auth0 package
export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
  }); 

  // it will take the token and get information out of it 

  export const jwtParse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.sendStatus(401);
      }

      const token = authorization.split(" ")[1]
      try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;
    
        const user = await User.findOne({ auth0Id });
    
        if (!user) {
          return res.sendStatus(401);
        }
    
        req.auth0Id = auth0Id as string;
        req.userId = user._id.toString();
        next();
      } catch (error) {
        return res.sendStatus(401);
      }
  }
  