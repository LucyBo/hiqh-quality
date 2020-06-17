/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FirstSection from '../../components/FirstSection';
import SecondSection from '../../components/SecondSection';
import Slider from '../../components/Slider';
import ThirdSection from '../../components/ThirdSection';
import HeaderMirror from '../../components/HeaderMirror';
import NewsLetter from '../../components/NewsLetter';
import Contact from '../../components/Contact';
import DescriptionSection from '../../components/DescriptionSection';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header/>
      <FirstSection/>
      <Slider/>
      <SecondSection/>
      <HeaderMirror/>
      <DescriptionSection/>
      <Router>
        <ThirdSection />
      </Router>
      <NewsLetter/>
      <Contact/>
    </div>
  );
}

