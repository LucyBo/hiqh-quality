/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BasicButton from '../../components/BasicButton';
import BrightButton from '../../components/BrightButton';
import Placeholder from '../../components/Placeholder';
import Navbar from '../../components/Navbar';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Navbar />
      <BasicButton />
      <BrightButton />
      <Placeholder />
    </div>
  );
}
