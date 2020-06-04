import React from 'react';
import './HeaderMirror.scss';
import imac from '../../images/imac.png';


export default function HeaderMirror() {
  return (
    <div>
      <section className="HeaderMirror">
          <h2 className="text-center">Header Mirror</h2>
      </section>
      <section className="row">
      <div className="col-lg-6 my-auto">
        <div className="text-center">
          <img src={imac} className="img-fluid" alt="smiling woman" />
        </div>
      </div>
      <div className="col-lg-6 my-auto">
        <h4>H4 Opis Tekstu Czarny</h4>
        <div className="right-col">
        Morbi a elementum quam. Ut id faucibus leo, ac faucibus felis. Nam ut placerat tortor, sed vestibulum lectus. Duis a tincidunt odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales dolor diam. Aliquam ut vehicula neque. Maecenas dolor turpis, vulputate eu metus et, fringilla dapibus mi. Pellentesque vel porta turpis. Morbi vitae sem faucibus, ultrices neque eu, fringilla nibh. Morbi ut libero mauris. Ut posuere elit sem.
        </div>
      </div>
      </section>
    </div>
  );
}
