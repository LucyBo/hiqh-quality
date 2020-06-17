import React from 'react';
import './DescriptionSection.scss';
import BasicButton from '../BasicButton';
import cake from '../../images/cake.png';
import lipstick from '../../images/lipstick.png';
import running from '../../images/running.png';

export default function DescriptionSection() {
  return (
    <section className="DescriptionSection ">
      <div className="container h-100">
        <div className="row h-100 text-center">
          <h2 className="col-sm-12">Today is your opportunity</h2>

          <div className="col-lg-4">
            <h3>Habits</h3>
            <img src={cake} className="img-fluid" alt="smiling woman" />
            <div>
              Suspendisse venenatis vulputate libero, sed imperdiet purus mattis
              in. Nam id velit at erat viverra tincidunt ac vel ligula.
            </div>
            <BasicButton>Habits</BasicButton>
          </div>

          <div className="col-lg-4">
            <h3>Self Confidence</h3>
            <img src={lipstick} className="img-fluid" alt="lipstick" />
            <div></div>
            <div>
              Nam nec est sed quam volutpat bibendum. Duis auctor dui elit, id
              venenatis lorem tempus vel. Donec luctus dolor vel lacinia
              maximus.
            </div>
            <BasicButton>Self Confidence</BasicButton>
          </div>

          <div className="col-lg-4">
            <h3>Goals</h3>
            <img src={running} className="img-fluid" alt="running woman" />
            
            <div></div>
            <div>
              Phasellus at tempus dolor. Mauris et nunc aliquam, tempor augue
              eu, consectetur ante. Vivamus pellentesque feugiat turpis id
              luctus.
            </div>
            <BasicButton>Goals</BasicButton>
            </div>
  

          <h2 className="col-sm-12">What do you need?</h2>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto text-center">
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
      </section>
       
  );
}
