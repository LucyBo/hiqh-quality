/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import BasicButton from '../../components/BasicButton';
import BrightButton from '../../components/BrightButton';
import Placeholder from '../../components/Placeholder';
import Navbar from '../../components/Navbar';
import A from '../../components/A';
import Header from '../../components/Header';
import FirstSection from '../../components/FirstSection';
import SecondSection from '../../components/SecondSection';
import Slider from '../../components/Slider';
import ContactForm from '../../components/Form';
import ThirdSection from '../../components/ThirdSection';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <FirstSection />
      <ContactForm />
      <Slider />
      <SecondSection />
      <BasicButton />
      <BrightButton />
      <Placeholder />
      <A />
      <Router>
        <ThirdSection />
      </Router>
    </div>
  );
}
