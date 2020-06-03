import React from 'react';
import './BasicButton.scss';

export default function BasictButton(props) {
  return (
    <div>
      <button type="button" className="basic-button btn" label="">
        {props.children}
      </button>
    </div>
  );
}
