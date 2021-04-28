import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

import { makeStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StreetviewIcon from '@material-ui/icons/Streetview';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import { countryList } from './data/countires';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {
  Grid,
  Input,
  InputLabel,
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

import './Signup.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  }
}));

const accountTypes  = [
  {
    value: 'mining',
    label: 'Mining'
  },

  {
    value: 'trading',
    label: 'Trading'
  }
]

const investmentOptions = [
  {
    value: 'MT4',
    label: 'MT4 (Forex, CFDs on stocks, Equity indices, Metals, Energies'
  },
  {
    value: 'MT5',
    label: 'MT5 (Forex, CFDs on stocks, Equity indices, Metals, Energies'
  },
]

const currencies = [
  {
    value: 'USD',
    label: '$ USD'
  },
  {
    value: 'EUR',
    label: '€ EUR'
  },
  {
    value: 'BTC',
    label: '฿ BTC'
  },
  {
    value: 'GBP',
    label: '£ GBP'
  }
];

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
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const classes = useStyles();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

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
                  CREATE ACCOUNT
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Sign up and start trading stocks, currencies, cryptos and so on.
                  </div>
              </h4>
            </div>
            <div className='form__container__details'>
              <FormControl
                // style={{width: '50%'}}
                className='form-control'
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  First name
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-amount"
                  // value={values.amount}
                  //onChange={handleChange('amount')}
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircleIcon />
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <FormControl

                className='form-control'
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Last name
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-amount"
                  // value={values.amount}
                  //onChange={handleChange('amount')}
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircleIcon />
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              <TextField

                    className='form-control'
                    variant='outlined'
                    id="standard-select-currency"
                    select
                    label="Select country"
                    defaultValue='Afghanistan'
                    // value={currency}
                    // onChange={handleChange}
                    helperText="Please select your country">
                    {countryList.map(country => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </TextField>
                  <FormControl
                    className='form-control'
                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      ZipCode 
                    </InputLabel>
                    <OutlinedInput
                      // id="outlined-adornment-amount"
                      // value={values.amount}
                      //onChange={handleChange('amount')}
                      endAdornment={
                        <InputAdornment position="end">
                          <StreetviewIcon />
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>

                  <FormControl
                    className='form-control'
                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      email 
                    </InputLabel>
                    <OutlinedInput
                      // id="outlined-adornment-amount"
                      // value={values.amount}
                      //onChange={handleChange('amount')}
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
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? (
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
              
              <TextField

                className='form-control'
                variant='outlined'
                id="standard-select-currency"
                select
                placeholder='Account Type'
                label="Select account type"
                // defaultValue='USD'
                // value={currency}
                // onChange={handleChange}
                // helperText="Please select your preffered account currency"
                >
                {accountTypes.map(accountType => (
                  <MenuItem key={accountType.value} value={accountType.value}>
                    {accountType.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField

                className='form-control'
                variant='outlined'
                id="standard-select-currency"
                select
                placeholder='Investment Option'
                label="Select investment option"
                // defaultValue='USD'
                // value={currency}
                // onChange={handleChange}
                // helperText="Please select your preffered account currency"
                >
                {investmentOptions.map(investmentOption => (
                  <MenuItem key={investmentOption.value} value={investmentOption.value}>
                    {investmentOption.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField

                    className='form-control'
                    variant='outlined'
                    id="standard-select-currency"
                    select
                    label="Select account  currency"
                    defaultValue='USD'
                    // value={currency}
                    // onChange={handleChange}
                    helperText="Please select your preffered account currency">
                    {currencies.map(currency => (
                      <MenuItem key={currency.value} value={currency.value}>
                        {currency.label}
                      </MenuItem>
                    ))}
              </TextField>
              
              <Button tag="a" color="primary" style={{borderRadius: '100px'}} className='bg-plum-plate text-light sign-btn' wideMobile href="https://cruip.com/">
                Create an account
              </Button>

              <span style={{marginTop: 'auto'}} className="text-xxs text-color-dark fw-600">Already have an account? <span className="text-xxs text-color-primary fw-600">Sign in</span></span> 
                
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