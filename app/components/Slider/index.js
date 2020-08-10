import React from 'react';
import './Slider.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';

export default function Slider({id}) {
  return (
    <section className="slider text-center"
    id="section2">
      <h2>Must-have</h2>
      <ul className="circle-container">
        <li className="img-details img-1" />
        <li className="img-details img-2" />
        <li className="img-details img-3" />
        <li className="img-details img-4" />
        <li className="img-details img-5" />
        <li className="img-details img-6" />
        <li className="img-details img-7" />
        <li className="img-details img-8" />
      </ul>
      <h4>Technology</h4>
      <div>Technologies that built this website</div>
      <BasicButton>Link! Link!</BasicButton>
    </section>
  );
}
