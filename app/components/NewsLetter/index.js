import React from 'react';
import './NewsLetter.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
import imac from '../../images/imac.png';
import cherries from '../../images/cherries.png';
import user from '../../images/user.png';
import envelope from '../../images/envelope.png';


export default function NewsLetter() {
  return (
    <div className="NewsLetter">
    <h2 className="text-center">Zapisz mnie na NewsLetter</h2>
    <p className="text-center">Lorem Ipsum</p>
    <div className="SecondSection">
    <div className="container h-100">
      <div className="row h-100 text-center">
        <div className="col-md-6 col-sm-12 my-auto baseline">
        
          <div className="description">
          <input
          className="name"
          type="text"
          id="name"
          name="name"
          placeholder="Type your name!"
        >
     
        </input>
        <input
          className="e-mail"
          type="text"
          id="e-mail"
          name="e-mail"
          placeholder="e-mail adress"
        />
        <BasicButton>Zapisz mnie!</BasicButton>
           
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
     
      
    </div>

  );
}
