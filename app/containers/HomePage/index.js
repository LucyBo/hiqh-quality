/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import BasicButton from '../../components/BasicButton';
import BrightButton from '../../components/BrightButton';
import Placeholder from '../../components/Placeholder';
import Navbar from '../../components/Navbar';
import A from '../../components/A';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <BasicButton />
      <BrightButton />
      <Placeholder />
      <A />
    </div>
  );
}
