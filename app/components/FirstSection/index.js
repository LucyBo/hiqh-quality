import React from 'react';
import './FirstSection.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
import cake from '../../images/cake.png';
import lipstick from '../../images/lipstick.png';
import running from '../../images/running.png';
import money from '../../images/icons/money.png';
import question from '../../images/icons/question.png';
import business from '../../images/icons/business.png';
import quote from '../../images/icons/quote.png';
import happyguy from '../../images/happy-guy.png';
import portrait from '../../images/portrait.png';
import baloon from '../../images/baloon.png';

export default function FirstSection({id}) {
  return (
    <section className="FirstSection " id="section1">
      <div className="container h-100">
        <div className="row h-100 text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
            <img src={question} />
            <div className="bright-text"> What's the object oriented way to become wealthy? </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
            <img src={money} />
            <div className="bright-text">-Inheritance!</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
          <img src={question} />
            <div className="bright-text">Why did the child component have such great self-esteem?</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-auto baseline">
          <img src={business} />
            <div className="bright-text">-Because its parent kept giving it props!</div>
          </div>

          <h1 className="col-sm-12">Confessions on changing careers</h1>

          <div className="col-lg-4">
            <h3>Growth</h3>
            <img src={portrait} className="img-fluid col-img" alt="smiling woman" />
            <div className="quote">
            <img src={quote} className="quote-mark img-fluid" />
            <div className="quote-text">
            Changing Careers Can Mean Finding Fulfillment. "Do I have to spend the rest of my life at a job I don’t like and not be able to spend time with family and friends?” So instead of staying stuck in a position that was taking over her personal life and wasn’t even the least bit satisfying, she decided to find a new career path.
            </div>
            </div>
            <BasicButton>Habits</BasicButton>
          </div>

          <div className="col-lg-4">
            <h3>Balance</h3>
            <img src={baloon} className="img-fluid col-img" alt="lipstick" />
            <div className="quote">
            <img src={quote} className="quote-mark img-fluid"/>
            <div className="quote-text">
            A New Career Should Strike the Right Balance. When it comes to deciding on what direction to go with a new career, some people are solely focused on earning the most money or making the career change as quickly as possible. But at the end of the day, if you’re still not feeling fulfilled in your new role, you’ll end up burning out and will find yourself changing careers all over again!
            </div>
            </div>
            <BasicButton>Self Confidence</BasicButton>
          </div>

          <div className="col-lg-4">
            <h3>No Regrets</h3>
            <img src={happyguy} className="img-fluid col-img"/>
            <div className="quote">
            <img src={quote} className="quote-mark img-fluid" />
            <div className="quote-text">
              Getting A Strong Foundation in Tech Skills is Easier Than You Think.When it came to gaining confidence and fighting off imposter syndrome, the support of other career changers was instrumental. She also mentions, “I think it was just accepting that there was always going to be someone better than me and… focusing on myself and what I can do to become better.” 
            </div>
            </div>
            <BasicButton>Goals</BasicButton>
          </div>
        </div>
      </div>
    </section>
  );
}


// The most important motive for work in school and in life is pleasure in work, pleasure in its result, and the knowledge of the value of the result to the community. <p>- Albert Einstein</

// Wealth, like happiness, is never attained when sought after directly. It comes as a by-product of providing a useful service. <p>- Henry Ford</p>

// If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability. <p>- Henry Ford</p>