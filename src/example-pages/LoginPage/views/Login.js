import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import PaymentMethods from '../components/sections/PaymentMethods'
import Cta from '../components/sections/Cta';

import LoginPage from '../components/sections/Login'

const Login = () => {

  return (
    <>
      <LoginPage />
      {/* <Hero className="illustration-section-01" /> */}
      {/* <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <PaymentMethods topDivider />
      <Cta split /> */}
    </>
  );
}

export default Login;