import React, { useState, useEffect } from 'react';
import { useDispatch }  from 'react-redux';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { setCurrentUserStartAsync, logOutCurrentUser } from '../../../../redux/user/user.actions';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StreetviewIcon from '@material-ui/icons/Streetview';
import EmailIcon from '@material-ui/icons/Email';

import { countryList } from './data/countires';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {
  InputLabel,
  InputAdornment,
  MenuItem,
  TextField,
  IconButton,
  FormControl,

} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import './Signup.scss';

function Alert(props) {
  return <MuiAlert style={{marginBottom: '1rem'}} elevation={6} variant="filled" {...props} />;
}


// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   margin: {
//     margin: theme.spacing(1)
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3)
//   },
//   textField: {
//     width: 200
//   },
//   snackbar: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

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
  }
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
  const { isLoading, hasError } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [handleShowPassword, togglePassword] = useState({
    showPassword: false
  });
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    password: '',
    country: '',
    zipCode: '',
    email: '',
    accountType: 'trading',
    accountCurrency: 'USD'
  });
  const [open, setOpen] = React.useState(false);

  // const classes = useStyles();

  useEffect(() => {
    if(hasError) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [hasError])
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = (event) => {
    setOpen(false)
    dispatch(logOutCurrentUser())
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
    togglePassword({ ...handleShowPassword, showPassword: !handleShowPassword.showPassword });
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
              {
                open 
                ?
                <Alert onClose={handleClose} severity="error">
                  There was an error signin up. Please  try again!
                </Alert>
                :
                null 
              }
                 
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
                  onChange={handleChange('firstName')}
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
                  onChange={handleChange('lastName')}
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
                    onChange={handleChange('country')}
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
                      onChange={handleChange('zipCode')}
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
              
              <TextField

                className='form-control'
                variant='outlined'
                id="standard-select-currency"
                select
                placeholder='Account Type'
                label="Select account type"
                defaultValue='trading'
                // value={currency}
                onChange={handleChange('accountType')}
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
                // onChange={handleChange('accountType')}
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
                    onChange={handleChange('accountCurrency')}
                    helperText="Please select your preffered account currency">
                    {currencies.map(currency => (
                      <MenuItem key={currency.value} value={currency.value}>
                        {currency.label}
                      </MenuItem>
                    ))}
              </TextField>
              
              <Button onClick={() => dispatch(setCurrentUserStartAsync(values, history))} tag="a" color="primary" style={{borderRadius: '100px'}} className='bg-plum-plate text-light sign-btn' wideMobile>
                {isLoading ? <CircularProgress size='1.5rem' /> : 'Create an account'}
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

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  hasError: state.user.hasError
})

export default connect(mapStateToProps, null)(Hero);