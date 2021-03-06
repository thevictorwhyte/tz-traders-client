import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, AlertTitle } from '@material-ui/lab';


import OutlinedInput from '@material-ui/core/OutlinedInput';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Grid,
    Input,
    InputLabel,
    InputAdornment,
    IconButton,
    Card,
    TextField,
    FormControl,
    FormHelperText,
    Divider,
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
      width: 200
    }
  }));
export default function InvestPage() {
    const classes = useStyles();
    const [showAlert, setShowAlert] = useState(false);
    const  [alertDetails, setAlertDetails] = useState({
      severity: '',
      title: '',
      message: ''
    })

    const [values, setValues] = useState({
        amount: ''
      });
    
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values)
    };

    const handleClick = () => {
      if(values.amount === '') {
        setAlertDetails({
          severity: 'error',
          title: 'Missing amount deposited',
          message: 'Please provide the amount you deposited.'
        
        });
        return setShowAlert(true)
      } else {
        setAlertDetails({
          severity: 'success',
          title: 'Success',
          message: 'You have successfully deposited pending confirmation. Your account manager will reach out to you shortly.'
        
        });
        return setShowAlert(true)
      }
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
                <b>How to deposit</b>
              </div>
            </div>
            <CardContent className="p-3">
              <PerfectScrollbar className="scroll-area-small">
                <p>
                  Investing with <b>TZ Traders</b> involves a straigtforward process of 3 easy steps <br />
                  <b>Step One:</b> Make  payment of deposit amount of your choice to the bitcoin address below <br />
                  <b>Step Two:</b> Fill in the amount you paid in the form below. <br />
                  <b>Step Three:</b> Click <b>I have deposited funds</b> and we will confirm your payment and reach out to you through your account manager. <br />
                </p>
              </PerfectScrollbar>
            </CardContent>
            </Card>

            <Card className="card-box mb-4">
              <CardContent className="p-3">
                <TextField
                  fullWidth
                  className="m-2"
                  id="filled-basic"
                  label="Bitcoin address"
                  variant="filled"
                  value="1G2nb8bR2GDTSDECuYgeY1vWjUHcjju3c2"
                />

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

                <Button onClick={handleClick} variant="contained" color="secondary" className="m-2">
                  <span className="btn-wrapper--label">I have deposited funds</span>
                  <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon='chart-bar'/>
                  </span>
                </Button>
              </CardContent>
            </Card>
        

            

            

              {/* <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Transaction ID
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.amount}
                  //onChange={handleChange('amount')}
                  
                  labelWidth={100}
                />
              </FormControl> */}

            
         
        </Fragment>
    )
}