import Contact from '../models/contact';
import { Request, Response } from 'express';

const createContact = async (req: Request, res: Response) => {
  try {
    const { customerName, customerEmail, customerPhone, customerNote, spamProtection } = req.body;

    // Simple validation
    if (spamProtection.toLowerCase() !== 'july 10th' && spamProtection.toLowerCase() !== 'july 10') {
      return res.status(400).json({ message: 'Incorrect spam protection answer' });
    }

    const newContact = new Contact({
      customerName,
      customerEmail,
      customerPhone,
      // orderNumber,
      customerNote,
      spamProtection
    });

    await newContact.save();
    res.status(201).json({ message: 'Thanks for your feedback!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving feedback', error });
  }
};

export default { createContact };
