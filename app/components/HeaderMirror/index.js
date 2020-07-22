import React from 'react';
import './HeaderMirror.scss';
import iphone from '../../images/iphone-mockup.png';
import darenergii from '../../images/darenergii.mp4';

export default function HeaderMirror({title, id}) {
  return (
    <section title="Section 5"
    id="section5" className="HeaderMirror" >
      <h1 className="text-center">Header Mirror</h1>
      <div className="row">
      <div className="col-lg-6 my-auto header-row">
        <div className="text-center">

        <video width="400" loop={true} autoPlay="autoPlay" id="vid" muted>
        <source src={darenergii} type="video/mp4"/>
      </video>
        </div>
      </div>
      <div className="col-lg-6 my-auto header-row">
        <h4>H4 Opis Tekstu Czarny</h4>
        <div className="right-col">
        Morbi a elementum quam. Ut id faucibus leo, ac faucibus felis. Nam ut placerat tortor, sed vestibulum lectus. Duis a tincidunt odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales dolor diam. Aliquam ut vehicula neque. Maecenas dolor turpis, vulputate eu metus et, fringilla dapibus mi. Pellentesque vel porta turpis. Morbi vitae sem faucibus, ultrices neque eu, fringilla nibh. Morbi ut libero mauris. Ut posuere elit sem.
        </div>
      </div>
      </div>
    </section>
  );
}
