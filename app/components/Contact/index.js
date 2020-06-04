import React from 'react';
import './Contact.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
import imac from '../../images/imac.png';
import user from '../../images/user.png';
import envelope from '../../images/envelope.png';



export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="text-center">Contact</h2>
      <p className="text-center">Lorem Ipsum</p>
      <div className="container h-100">
        <div className="row h-100 text-center">
          <div className="col-md-6 col-sm-12">
        
          <div className="description">
            <p><img src={user} className="img-fluid" alt="smiling woman" />Adres hjlhjfdsljhfklsdjhl</p>
            <p><img src={user} className="img-fluid" alt="smiling woman" />Adres hjlhjfdsljhfklsdjhl</p>
            <p><img src={user} className="img-fluid" alt="smiling woman" />Adres hjlhjfdsljhfklsdjhl</p>  
            <p><img src={user} className="img-fluid" alt="smiling woman" />Adres hjlhjfdsljhfklsdjhl</p> 
            <BasicButton>Say Hi to me!</BasicButton>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 my-auto baseline">
          <div className="description">
           <img src={imac} className="img-fluid" alt="smiling woman" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
