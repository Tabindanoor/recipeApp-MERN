import express from 'express';
import ContactController  from '../controllers/ContactController';
import { jwtCheck } from '../middleware/auth';

const router = express.Router();

// Define the route to handle form submission

router.put(
    "/" ,
    jwtCheck,
    ContactController.createContact)


export default router;
 