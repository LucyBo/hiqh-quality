import React from 'react';
import './Placeholder.scss';

export default function Placeholder() {
  return (
    <div>
      <label htmlFor="phone">Enter a phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      />
    </div>
  );
}
