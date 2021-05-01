import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

import ProtectedRoute from './ProtectedRoute';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages

import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import NavigationMenus from './example-pages/NavigationMenus';
import ProgressBars from './example-pages/ProgressBars';
import Pagination from './example-pages/Pagination';
import Scrollable from './example-pages/Scrollable';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import FormsControls from './example-pages/FormsControls';

const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const InvestPage = lazy(() => import('./example-pages/Invest'));
const WithdrawalPage = lazy(() => import('./example-pages/Withdrawal'))

const Cards3 = lazy(() => import('./example-pages/Cards3'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const LoginPage = lazy(() => import('./example-pages/LoginPage'));
const SignupPage  = lazy(() => import('./example-pages/Signuppge'))

const Accordions = lazy(() => import('./example-pages/Accordions'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));

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
                '/withdraw',
                '/Buttons',
                '/Dropdowns',
                '/NavigationMenus',
                '/ProgressBars',
                '/Pagination',
                '/Scrollable',
                '/Badges',
                '/Icons',
                '/UtilitiesHelpers',
                '/Cards3',
                '/Accordions',
                '/Modals',
                '/Notifications',
                '/Popovers',
                '/Tabs',
                '/RegularTables1',
                '/RegularTables4',
                '/FormsControls',
                '/ApexCharts',
                '/Maps',
                '/ListGroups'
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
                    <ProtectedRoute path="/Buttons" loggedIn={loggedIn} component={Buttons} />
                    <ProtectedRoute path="/Dropdowns" loggedIn={loggedIn} component={Dropdowns} />
                    <ProtectedRoute
                      path="/NavigationMenus"
                      loggedIn={loggedIn}
                      component={NavigationMenus}
                    />
                    <ProtectedRoute path="/ProgressBars" loggedIn={loggedIn} component={ProgressBars} />
                    <ProtectedRoute path="/Pagination" loggedIn={loggedIn} component={Pagination} />
                    <ProtectedRoute path="/Scrollable" loggedIn={loggedIn} component={Scrollable} />
                    <ProtectedRoute path="/Badges" loggedIn={loggedIn} component={Badges} />
                    <ProtectedRoute path="/Icons" loggedIn={loggedIn} component={Icons} />
                    <ProtectedRoute
                      path="/UtilitiesHelpers"
                      loggedIn={loggedIn}
                      component={UtilitiesHelpers}
                    />
                    <ProtectedRoute path="/Cards3" loggedIn={loggedIn} component={Cards3} />
                    <ProtectedRoute path="/Accordions" loggedIn={loggedIn} component={Accordions} />
                    <ProtectedRoute path="/Modals" loggedIn={loggedIn} component={Modals} />
                    <ProtectedRoute path="/Notifications" loggedIn={loggedIn} component={Notifications} />
                    <ProtectedRoute path="/Popovers" loggedIn={loggedIn} component={Popovers} />
                    <ProtectedRoute path="/Tabs" loggedIn={loggedIn} component={Tabs} />
                    <ProtectedRoute path="/RegularTables1" loggedIn={loggedIn} component={RegularTables1} />
                    <ProtectedRoute path="/RegularTables4" loggedIn={loggedIn} component={RegularTables4} />
                    <ProtectedRoute path="/FormsControls" loggedIn={loggedIn} component={FormsControls} />
                    <ProtectedRoute path="/ApexCharts" loggedIn={loggedIn} component={ApexCharts} />
                    <ProtectedRoute path="/Maps" loggedIn={loggedIn}component={Maps} />
                    <ProtectedRoute path="/ListGroups" loggedIn={loggedIn} component={ListGroups} />
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
