import React from 'react';
import './BrightButton.scss';

export default function BrightButton(props) {
  return (
    <div>
      <button type="button" className="bright-button btn btn-outline-danger">
        {props.children}
      </button>
      <div className="gradient-box" />
    </div>
  );
}
