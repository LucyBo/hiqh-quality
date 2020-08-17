import React from 'react';
import './HeaderMirror.scss';
import iphone from '../../images/iphone-mockup.png';
import darenergii from '../../images/page.png';

export default function HeaderMirror({ title, id }) {
  return (
    <section title="Section 5" id="section5" className="HeaderMirror">
      <h1 className="text-center">My sample work</h1>
      <div className="row">
        <div className="col-lg-6 col-sm-12 my-auto header-row">
          <img src={darenergii} width="400" id="vid" />
        </div>
        <div className="col-lg-6 col-sm-12 my-auto header-row">
          <h4 className="text-center">Bioenergotherapist's page</h4>
          <div className="right-col">
            I used one from Gatsby starter, then completely makeover it. I
            prepared whole concept - design and functionality. Page has a little
            back-end app for sending data grabbed from contact form on mail.
          </div>
        </div>
      </div>
    </section>
  );
}

// <video width="400" loop={true} autoPlay="autoPlay" id="vid" muted>
// <source src={darenergii} type="video/mp4"/>
// </video>
