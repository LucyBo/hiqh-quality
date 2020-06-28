import React from 'react';
import './NewsLetter.scss';
import BasicButton from '../BasicButton';
import joke from '../../images/joke.png';

// import cherries from '../../images/cherries.png';
// import user from '../../images/user.png';
// import envelope from '../../images/envelope.png';

export default function NewsLetter() {
  return (
    <div className="NewsLetter" id="newsletter">
    <h1 className="text-center">Newsletter</h1>
    <h4 className="text-center">Take opportunity to read great jokes</h4>
    
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
           />
          <input
            className="e-mail"
            type="text"
            id="e-mail"
            name="e-mail"
            placeholder="e-mail adress"
          />
        <BasicButton>Newsletter</BasicButton>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 my-auto baseline">
          <div className="description">
          <img src={joke} className="img-fluid news-img" alt="smiling woman" />
          </div>
        </div>
      </div>
    </div>
  </div>


  );
}
