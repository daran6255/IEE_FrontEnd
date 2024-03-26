import React from 'react';
import NavBarComponent from '../../layouts/navbar';
import Header from '../../layouts/header';
import About from '../../layouts/about';
import Timeline from '../../layouts/timeline';
import Pricing from '../../layouts/pricing';
import Sponsor from '../../layouts/sponcers';
import Testimonials from '../../layouts/testimonials';
import Footer from '../../layouts/footer';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Header />

      <About />
      <Timeline />
      <Sponsor />
      <Pricing />
      <Testimonials />
      <Footer />





    </div>
  );
}

export default App;

