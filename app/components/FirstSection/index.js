import React from 'react';
import './Header.scss';
import BrightButton from '../BrightButton';
import BasicButton  from '../BasicButton';
import girl from '../../images/girl.png';


export default function FirstSection() {
  return (
    <div>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 my-auto">
              <div className="header-content mx-auto"> 
                <h1>High Quality Personality</h1>
                <h4>Custom made Gatsby Starter with ReactJS, Babel & Bootstrap</h4>
                <BasicButton/>
              </div>
            </div>
            <div className="col-lg-6 my-auto">
            
            <img src={girl} className="img-fluid" alt="smiling woman" />
        
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
