import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

import ProtectedRoute from './ProtectedRoute';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';


const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const InvestPage = lazy(() => import('./example-pages/Invest'));
const WithdrawalPage = lazy(() => import('./example-pages/Withdrawal'))

const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const LoginPage = lazy(() => import('./example-pages/LoginPage'));
const SignupPage  = lazy(() => import('./example-pages/Signuppge'))


const Routes = (props) => {
  const { loggedIn } = props;
  const location = useLocation();


  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Loading...  
              </div>
            </div>
          }>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path={['/home', '/login', '/signup']}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/home" component={LandingPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                '/dashboard',
                '/deposit',
                '/withdraw'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <ProtectedRoute
                      path="/dashboard"
                      loggedIn={loggedIn}
                      component={DashboardDefault}
                    />
                    <ProtectedRoute
                      path="/deposit"
                      loggedIn={loggedIn}
                      component={InvestPage}
                    />
                    <ProtectedRoute
                      path="/withdraw"
                      loggedIn={loggedIn}
                      component={WithdrawalPage}
                    />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.userLoggedIn
})

export default connect(mapStateToProps, null)(Routes);
