import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <p className="text-sm mb-0">
            
            <p>All materials and services provided on this site are 
              subject to copyright and belong to "Tztradersfx ". Any use of 
              materials of this website must be approved by an official representative
              of "Tztradersfx ", and contain a link to the original resource. 
              Any third-party companies of "Online - broker" or "Online – betting" 
              type, do not have the right to use materials of this website as well as 
              any distorted writing of "Tztradersfx ". In case of violation, they
              will be prosecuted in accordance with legislation of the intellectual 
              property protection.
            </p>
            <p>Tztradersfx   is registered at Trust Company Complex,
              Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall 
              Islands MH 96960 with the registration number 86967.
            </p>
            <p>Tztradersfx   is regulated by IFMRRC (License number TSRF RU 0395 AA Vv0124)</p>
            <p>All brokerage activity on this website is provided by 
              Tztradersfx . Payments are processed with the assistance of Tifiya 
              Group s.r.o., which is registered as Tztradersfx  's agent in the 
              EU.
            </p>
          </p>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              <p>Copyright ©2021 TZTradersFX</p>
              <p>TZTradersFX is the owner of the TZTradersFX.com domain.</p>
                Made by <a href="https://cruip.com">TZTradersFX  Team</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;