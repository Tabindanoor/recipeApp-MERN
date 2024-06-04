import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String },
  orderNumber: { type: String },
  customerNote: { type: String, required: true },
  spamProtection: { type: String, required: true }
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
