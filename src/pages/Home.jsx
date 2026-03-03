import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import HighlightCards from '../components/home/HighlightCards';
import QuickLinks from '../components/home/QuickLinks';
import Footer from '../components/shared/Footer';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HighlightCards />
      <QuickLinks />
      <Footer />
    </div>
  );
}