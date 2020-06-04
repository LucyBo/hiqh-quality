import React from 'react';
import './Slider.scss';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';

export default function Slider() {
  return (
    <div className="slider text-center">
      <h2>Working on Website</h2>
      <ul className="circle-container">
        <li className="img-details img-1"><div className="description">Lorem Ipsum tu jest opis Lorem Ipsum tu jest opis</div></li>
        <li className="img-details img-2" />
        <li className="img-details img-3" />
        <li className="img-details img-4" />
        <li className="img-details img-5" />
        <li className="img-details img-6" />
        <li className="img-details img-7" />
        <li className="img-details img-8" />
      </ul>
      <h4>Header H4</h4>
      <div>Simple Description With basic text</div>
      <BasicButton>Link! Link!</BasicButton>
    </div>
  );
}
