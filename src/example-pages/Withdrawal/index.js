import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
export default function WithdrawalPage() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false
      });

    return (
        <Fragment>
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
            <span>Available for withdrawal: $6,000</span>

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
                  //onChange={handleChange('amount')}
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
                  value={values.amount}
                  //onChange={handleChange('amount')}
                  
                  labelWidth={100}
                />
              </FormControl>

            <Button variant="contained" color="secondary" className="m-2">
                <span className="btn-wrapper--label">Withdraw</span>
                <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon='dollar-sign' />
                </span>
            </Button>
         
        </Fragment>
    )
}