import React from 'react';
import './BrightButton.scss';

export default function BrightButton() {
  return (
    <div>
      <button type="button" className="bright-button btn btn-outline-danger">
        Bright Button
      </button>
      <div className="gradient-box" />
    </div>
  );
}
