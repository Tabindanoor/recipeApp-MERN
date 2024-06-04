
import  { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    orderNumber: '',
    customerNote: '',
    spamProtection: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:7000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success(data.message);
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          orderNumber: '',
          customerNote: '',
          spamProtection: ''
        });
      } else {
        toast.error(data.message || 'Error submitting feedback');
      }
    } catch (error) {
      toast.error('Error submitting feedback');
    }
  };

  return (
    <div className='contact'>
      <ToastContainer />
      <div className="contact-us">
        <form onSubmit={handleSubmit}>
          <label htmlFor="customerName"  className='labelInputTextArea'>NAME <em>&#x2a;</em></label>
          <input 

           className='labelInputTextArea input inputTextArea'
            id="customerName"
            name="customerName"
            required
            type="text"
            value={formData.customerName}
            onChange={handleChange}
          />

          <label htmlFor="customerEmail" className='labelInputTextArea'>EMAIL <em>&#x2a;</em></label>
          <input 

           className='labelInputTextArea input inputTextArea'
            id="customerEmail"
            name="customerEmail"
            required
            type="email"
            value={formData.customerEmail}
            onChange={handleChange}
          />

          <label htmlFor="customerPhone"
           className='labelInputTextArea '>PHONE</label>
          <input 

            id="customerPhone"
            name="customerPhone"
            className='labelInputTextArea input inputTextArea'
            pattern='^(\+92[0-9]{10}|[0-9]{4}-[0-9]{7})$'
            placeholder='0305-5734382 or +923055734382'
            type="tel"
            value={formData.customerPhone}
            onChange={handleChange}
          />

          {/* <label htmlFor="orderNumber">ORDER NUMBER</label>
          <input 

            id="orderNumber"
            name="orderNumber"
            type="text"
            value={formData.orderNumber}
            onChange={handleChange}
          /> */}

          <label htmlFor="customerNote"  className='labelInputTextArea'>YOUR MESSAGE <em>&#x2a;</em></label>
          <textarea

           className='labelInputTextArea inputTextArea'
            id="customerNote"
            name="customerNote"
            required
            rows="4"
            value={formData.customerNote}
            onChange={handleChange}
          ></textarea>

          <h3 className='h3'>
            Please provide all the information about your issue you can.
          </h3>

          <label htmlFor="spamProtection"  className='labelInputTextArea'>
            SPAM PROTECTION <em>&#x2a; </em>
            <span className='span'>&nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?</span>
          </label>
          <input 

           className='labelInputTextArea inputTextArea input'
            id="spamProtection"
            name="spamProtection"
            type="text"
            value={formData.spamProtection}
            onChange={handleChange}
          />

          <button id="customerOrder" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

