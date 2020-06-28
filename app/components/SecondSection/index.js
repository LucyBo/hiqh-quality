import React from 'react';
import './SecondSection.scss';
import BasicButton from '../BasicButton';
import Scroll from '../Scroll/Scroll';
import quote from '../../images/icons/quote.png';

export default function SecondSection({title, id}) {
  return (
    <section className="SecondSection" title="Section 4"
    id="features">
      <div className="container h-100">
      <h4 className="text-center">After this 4 questions, you’ll be able to decide when it’s time to go after your dream job!</h4>

        <div className="row h-100 text-center">
        
          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="description">
            
              <div className="violet-text">Determine the New Career That’s Right for You</div>
              <div className="description-short">
              The first step to making a career change may be one of the most difficult. Many people know they’re unhappy with their job and want to find a new career, but aren’t exactly sure what position is right for them. If you already happen to have your sights set on a specific role, congrats! You can skip this step. But if you’re still trying to home in on what your new career will be, start with some introspection.
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="description">
            
              <div className="violet-text">Get the Skills You Need
              </div>
              <div className="description-short">
              The next step for changing careers is identifying your skill gaps and working to fill them. You can research job postings to see what skills hiring managers value or (even better!) ask which skills are most in-demand during an informational interview. If you’re interested in a tech career, you may need to improve your tech skills. But if you’re still not quite sure which tech career you want to pursue, that’s 100% ok! 
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="description">
           
              <div className="violet-text">Accept That There’s No Straight Path to Changing Careers
              </div>
              <div className="description-short">
              No matter what, the most important thing to remember is that changing careers takes time, and it’s not always a straight path.Whatever career change you’re making, focus on the above five steps to help you smooth out the transition process. Soon you can turn all of your career change fears into a dream career reality!
              </div>
            </div>
          </div>
        
          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="description">
              <div className="violet-text">Dispel Doubts
              </div>
              <div className="description-short">
              When it comes to changing careers—or making any big change for that matter—you may start to doubt yourself. Whether you’re facing imposter syndrome or feeling scared of change in general, going after a new career takes a boatload of courage. But knowing you’re not alone on your journey can help!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
