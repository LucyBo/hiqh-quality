import React from 'react';
import './SecondSection.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
import Scroll from '../Scroll/Scroll';

export default function SecondSection({title, id}) {
  return (
    <section className="SecondSection" title="Section 4"
    id="features">
      <div className="container h-100">
        <div className="row h-100 text-center">
          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="miniature mini-1" />
            <div className="description">
              <div className="violet-text"> Fioletowy Nagłówek</div>
              <div className="description-short">
                Donec diam lectus, gravida non leo fringilla, fringilla
                fringilla mauris. Vestibulum id enim et diam vestibulum
                condimentum.
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="miniature mini-2" />
            <div className="description">
              <div className="violet-text">Fioletowy Nagłówek</div>
              <div className="description-short">
                Donec diam lectus, gravida non leo fringilla, fringilla
                fringilla mauris. Vestibulum id enim et diam vestibulum
                condimentum.{' '}
              </div>
            </div>
          </div>
        </div>

        <div className="row h-100 text-center">
          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="miniature mini-3" />
            <div className="description">
              <div className="violet-text">Fioletowy Nagłówek</div>
              <div className="description-short">
                Donec diam lectus, gravida non leo fringilla, fringilla
                fringilla mauris. Vestibulum id enim et diam vestibulum
                condimentum.{' '}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 my-auto baseline">
            <div className="miniature mini-4" />
            <div className="description">
              <div className="violet-text">Fioletowy Nagłówek</div>
              <div className="description-short">
                Donec diam lectus, gravida non leo fringilla, fringilla
                fringilla mauris. Vestibulum id enim et diam vestibulum
                condimentum.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
