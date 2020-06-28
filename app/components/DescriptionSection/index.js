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
          <h2 className="col-sm-12">What is it about?</h2>
          <div className="col-lg-4">
            <img src={cake} className="img-fluid" alt="smiling woman" />
            <h3>Habits</h3>
            <div>
              Because the only source of knowledge is experience. Provide a better understanding of the positive consequences that can follow a coding the positive outcomes, suggest ideas for research on the growth-promoting aspects of coding crises.
            </div>
          </div>

          <div className="col-lg-4">
            
            <img src={lipstick} className="img-fluid" alt="lipstick" />
            <h3>Design</h3>
            <div>
            “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.”
            </div>
          </div>

          <div className="col-lg-4">
           
            <img src={running} className="img-fluid" alt="running woman" />
            
            <h3>Goals</h3>
            <div>
              “We don’t get a chance to do that many things, and every one should be really excellent. Because this is our life. Life is brief, and then you die, you know? And we’ve all chosen to do this with our lives. So, it better be damn good. It better be worth it.”
            </div>
            </div>
  

          <h2 className="col-sm-12">4 steps process</h2>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto text-center">
            <div className="bullets">
              <div className="decorative-number">1</div>
              <span id="dots" />
            </div>
            <h4>Visual Concept</h4>
            <div className="left-align-description">Behance, Pinterest and Webflow is enough to think how miserable my design-skills are. </div>
          </div>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">2</div>
              <span id="dots" />
            </div>
            <h4>Babel, why are you do this to me? </h4>
            <div className="left-align-description">17.06.2020 Babel has 4726 questions on GitHub. I don't know how I survived.</div>
          </div>

          <div className="steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">3</div>
              <span id="dots" />
            </div>
            <h4>Write what you planned</h4>
            <div className="left-align-description">Take your time, don't throw your mac through the window. </div>
          </div>

          <div className=" steps col-lg-3 col-md-6 col-sm-12 my-auto">
            <div className="bullets">
              <div className="decorative-number">4</div>
              <span id="dots" />
            </div>
            <h4>Learn by one’s mistakes</h4>
            <div className="left-align-description">It's good to know that you spend all those hours to be stronger, faster and smarter! </div>
          </div>
        </div>
      </div>
      </section>
       
  );
}
