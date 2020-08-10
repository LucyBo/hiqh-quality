import React from 'react';
import './Contact.scss';
import BasicButton from '../BasicButton';
import user from '../../images/user.png';
import envelope from '../../images/envelope.png';
import pin from '../../images/pin.png';
import contact from '../../images/contact.png';
import www from '../../images/www.png';



export default function Contact({id}) {
  return (
    <section className="Contact" id="contact">
      <h1 className="text-center">Contact</h1>
      <h4 className="text-center">Say hi to my fictitious contact details!</h4>
      <div className="container h-100">
        <div className="row h-100 text-center baseline">
          
          <div className="col-md-6 col-sm-12">
          <div className="description">
            <p><img src={user} className="img-icon" alt="smiling woman" />High Quality Personality Team</p>
            <p><img src={envelope} className="img-icon"  alt="smiling woman" />highquality@contact.me</p>
            <p><img src={pin} className="img-icon"  alt="smiling woman" />+48 123 456 789</p>  
            <p><img src={www} className="img-icon"  alt="smiling woman" />highqualitypersonality.com</p> 
            <BasicButton>Say Hi to me!</BasicButton>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 my-auto">
          <div className="description">
           <img src={contact} className="img-fluid" alt="smiling woman" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
