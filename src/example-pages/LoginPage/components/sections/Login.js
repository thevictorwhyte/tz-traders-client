import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Input from '../elements/Input';

import './Login.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm bg">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={innerClasses}>
          <div className='form__container'>
            <div className='form__container__header'>
              <h4 className="mt-0 mb-8">
                  ACCESS THE FINANCIAL MARKETS ALL IN ONE PLACE
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Sign in and start trading forex
                  </div>
              </h4>
            </div>
            <div className='form__container__details'>
              <Input style={{ 
                border: 'none',
                borderBottom: '1px solid grey',
                marginBottom: '1rem'
              }} 
              placeholder='email address'
              ></Input>

              <Input style={{ 
                border: 'none',
                borderBottom: '1px solid grey',
                marginBottom: '1rem'  

              }} 
              placeholder='password'
              ></Input>
              <Button tag="a" color="primary" className='bg-plum-plate text-light sign-btn' wideMobile href="https://cruip.com/">
                Log in
              </Button>
              <span className="text-xxs text-color-primary fw-400">Forgot password?</span>

              <span style={{marginTop: 'auto'}} className="text-xxs text-color-dark fw-600">Don't have an account? <span className="text-xxs text-color-primary fw-600">Sign up</span></span> 
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;