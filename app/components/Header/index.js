import React, {Component} from 'react';
import './Header.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
import girl from '../../images/girl.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <section title="Section 1"
    id="section1">
      <header className="masthead" >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 my-auto">
              <div className="header-content my-auto">
                <h1>High Quality Personality</h1>
                <h4>
                  Custom made Starter build with ReactJS, Babel & Bootstrap
                </h4>
                <BasicButton>Click me!</BasicButton>
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="text-center">
                <img src={girl} className="img-fluid" alt="smiling woman" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
}
