import React from 'react';
import './FirstSection.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
// import girl from '../../images/girl.png';
// import cake from '../../images/cake.png';
// import lipstick from '../../images/lipstick.png';
// import cherries from '../../images/cherries.png';

export default function FirstSection() {
  return (
    <div className="FirstSection ">
      <div className="container h-100">
        <div className="row h-100 text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
            <div className="icon-cake" />
            <div className="bright-text"> Napis Z Kółkiem</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
            <div className="icon-cake" />
            <div className="bright-text">Lorem</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
            <div className="icon-cake" />
            <div className="bright-text">Ipsum</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
            <div className="icon-cake" />
            <div className="bright-text">Dolor</div>
          </div>

          <h2 className="col-sm-12">First Section Header</h2>

          <div className="col-lg-4">
            <h3>Self Confidence</h3>
            <div>
              Suspendisse venenatis vulputate libero, sed imperdiet purus mattis
              in. Nam id velit at erat viverra tincidunt ac vel ligula.
            </div>
            <BasicButton>Self Confidence</BasicButton>
          </div>

          <div className="col-lg-4">
            <h3>Health</h3>
            <div>
              Nam nec est sed quam volutpat bibendum. Duis auctor dui elit, id
              venenatis lorem tempus vel. Donec luctus dolor vel lacinia
              maximus.
            </div>
            <BasicButton>More About Health</BasicButton>
          </div>

          <div className="col-lg-4">
            <h3>Joy</h3>
            <div>
              Phasellus at tempus dolor. Mauris et nunc aliquam, tempor augue
              eu, consectetur ante. Vivamus pellentesque feugiat turpis id
              luctus.
            </div>
            <BasicButton>Give me more Joy!</BasicButton>
          </div>

          <h2 className="col-sm-12">What do you need?</h2>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">1</div>
              <span id="dots" />
            </div>
            <h4>Nagłówek</h4>
            <div className="left-align-description">Short description</div>
          </div>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">2</div>
              <span id="dots" />
            </div>
            <h4>Nagłówek</h4>
            <div className="left-align-description">Short description</div>
          </div>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">3</div>
              <span id="dots" />
            </div>
            <h4>Nagłówek</h4>
            <div className="left-align-description">Short description</div>
          </div>

          <div className=" steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">4</div>
              <span id="dots" />
            </div>
            <h4>Nagłówek</h4>
            <div className="left-align-description">Short description</div>
          </div>
        </div>
      </div>
    </div>
  );
}
