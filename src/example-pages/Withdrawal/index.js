import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, AlertTitle } from '@material-ui/lab';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    InputLabel,
    InputAdornment,
    Card,
    FormControl,
    CardContent,
    Button
  } from '@material-ui/core';

  
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
      width: '100%'
    }
  }));
const WithdrawalPage = (props) => {
  const { accountBalance } = props;
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);
  const  [alertDetails, setAlertDetails] = useState({
    severity: '',
    title: '',
    message: ''
  })

  const [values, setValues] = useState({
      amount: '',
      btcAddress: ''
    });

    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values)
    };

    const handleClick = () => {
      if(values.btcAddress === '') {
        setAlertDetails({
          severity: 'error',
          title: 'Missing BTC address',
          message: 'Please provide your BTC address to send funds.'
        
        });
        return setShowAlert(true)
      }
      if(values.amount <= accountBalance) {
        setAlertDetails({
          severity: 'success',
          title: 'Withdrawal placed successfully',
          message: 'You have successfully  placed your withdrawal. Your account manager will contact you shortly. Thank you for choosing TZ Traders.'
        
        });
      } else {
        setAlertDetails({
          severity: 'error',
          title: 'Withdrawal amount more than account balance.',
          message: 'You must be trying to withdraw an amount greater than your account balance. Please input an amount within account balance'
        
        });

      }
      setShowAlert(true)
    }
    return (
        <Fragment>
          {
            showAlert 
            ?
            <Alert severity={alertDetails.severity}>
              <AlertTitle>{alertDetails.title}</AlertTitle>
              {alertDetails.message}
            </Alert>
            :
            null
          }
            <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>From TZ Traders</small>
                <b>How to withdraw your earnings</b>
              </div>
            </div>
            <CardContent className="p-3">
              <PerfectScrollbar className="scroll-area-small">
                <p>
                  Withdrawing your earnings simply involves the following steps <br />
                  <b>Step One:</b> Fill the form below <br />
                  <b>Step Two:</b> Click <b>Withdraw</b> <br />
                </p>
              </PerfectScrollbar>
            </CardContent>
            </Card>

            <Card className="card-box mb-4">
              <div className="card-header">
                <div className="card-header--title">
                  <span>{`Available for withdrawal: $${accountBalance === 0 ? '0.00' : accountBalance}`}</span>
                </div>
              </div>
              <CardContent className="p-3">
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Amount
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.amount}
                      onChange={handleChange('amount')}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>

                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Bitcoin address
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.btcAddress}
                      onChange={handleChange('btcAddress')}
                      
                      labelWidth={100}
                    />
                  </FormControl>

                <Button onClick={handleClick} variant="contained" color="secondary" className="m-2">
                <span className="btn-wrapper--label">Withdraw</span>
                <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon='dollar-sign' />
                </span>
            </Button>
              </CardContent>
            </Card>
        </Fragment>
    )
}

const mapStateToProps = state => ({
  accountBalance: state.user.currentUser.accountBalance || 0,
})

export default connect(mapStateToProps, null)(WithdrawalPage);