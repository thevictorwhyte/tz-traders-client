import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { loginUser, logOutCurrentUser } from '../../../../redux/user/user.actions';

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import CircularProgress from '@material-ui/core/CircularProgress';



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
import MuiAlert from '@material-ui/lab/Alert';


import './Login.scss';

function Alert(props) {
  return <MuiAlert style={{marginBottom: '1rem'}} elevation={6} variant="filled" {...props} />;
}
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
  const { hasError, isLoading } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [handleShowPassword, togglePassword] = useState({
    showPassword: false
  });

  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if(hasError) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [hasError])

  const handleClose = (event) => {
    setOpen(false)
    dispatch(logOutCurrentUser())
  };

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
            {
                open 
                ?
                <Alert onClose={handleClose} severity="error">
                  There was an error loggin you in. Please check your details and try again!
                </Alert>
                :
                null 
              }
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
                {isLoading ? <CircularProgress size='1.5rem' /> : 'Login'}
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

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  hasError: state.user.hasLoginError
})

export default connect(mapStateToProps, null)(Hero);