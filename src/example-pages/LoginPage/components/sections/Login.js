import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../../../redux/user/user.actions';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
// import Input from '../elements/Input';

import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import {
  Grid,
  Input,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  Card,
  TextField,
  IconButton,
  FormControl,
  RadioGroup,
  FormHelperText,
  Divider,
  CardContent
} from '@material-ui/core';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [handleShowPassword, togglePassword] = useState({
    showPassword: false
  });
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    togglePassword({ ...handleShowPassword, showPassword: !handleShowPassword.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

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
            <FormControl
                    className='form-control'
                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      email 
                    </InputLabel>
                    <OutlinedInput
                      // id="outlined-adornment-amount"
                      // value={values.amount}
                      onChange={handleChange('email')}
                      endAdornment={
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>


                  <FormControl 
                    className='form-control'
                    variant="outlined"
                  >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Password
                  </InputLabel>
                  <OutlinedInput  
                    // id="standard-adornment-password"
                    type={handleShowPassword.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                        {handleShowPassword.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}

                />
              </FormControl>
              
              <Button onClick={() => {
                dispatch(loginUser(values, history))
              }} tag="a" color="primary" style={{borderRadius: '100px'}} className='bg-plum-plate text-light' wideMobile>
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