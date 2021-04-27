import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import  Button from  '../elements/Button'
import './Testimonial.scss'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Account types',
    paragraph: 'Flexible plans for you.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <span style={{fontWeight: 'bold'}} className="testimonial-item-link">BASIC PLAN</span>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Minimum Deposit - $300 <br />
                    Up to 10% Bonus <br />
                    Account Manager <br />
                    24/5 customer support <br />
                    Withdrawal process 10 business days <br />
                    </p>
                </div>
                <div style={{textAlign: 'center'}} className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">Basic plan</span>
                  <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    <Button tag="a" color="primary" className='bg-plum-plate text-light' wideMobile href="https://cruip.com/">
                      Choose plan
                    </Button>
                  </span>
                </div>
              </div>
            
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <span style={{fontWeight: 'bold'}} className="testimonial-item-link">STANDARD PLAN</span>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Minimum Deposit - $1000 <br />
                    Up to 50% Bonus <br />
                    Account Manager <br />
                    24/5 customer support <br />
                    Withdrawal process 7 business days <br />
                  </p>
                </div>
                <div style={{textAlign: 'center'}} className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">Basic plan</span>
                  <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    <Button tag="a" color="primary" className='bg-plum-plate text-light' wideMobile href="https://cruip.com/">
                      Choose plan
                    </Button>
                  </span>
                </div>
              </div>
            
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <span style={{fontWeight: 'bold'}} className="testimonial-item-link">EXECUTIVE PLAN</span>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Minimum Deposit - $5000 <br />
                    Up to 50% Bonus <br />
                    Account Manager <br />
                    24/5 customer support <br />
                    Withdrawal process 5 business days <br />
                    </p>
                </div>
                <div style={{textAlign: 'center'}} className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">Basic plan</span>
                  <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    <Button tag="a" color="primary" className='bg-plum-plate text-light' wideMobile href="https://cruip.com/">
                      Choose plan
                    </Button>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;