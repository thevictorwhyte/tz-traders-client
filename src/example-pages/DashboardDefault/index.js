import React, { Fragment } from 'react';
import TradingViewWidget  from 'react-tradingview-widget';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function DashboardDefault() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
       <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Forex" {...a11yProps(0)} />
          <Tab label="Stock" {...a11yProps(1)} />
          <Tab label="Cryptocurrency" {...a11yProps(2)} />
          <Tab label="Indices" {...a11yProps(3)} />
          <Tab label="Commodities" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <TradingViewWidget 
        width='auto'
        symbol='FX:EURUSD' 
        timezone='Etc/UTC'
        theme= "Dark"
        style= "1"
        locale= "en"
        toolbar_bg= "#f1f3f6"
        enable_publishing= {false}
        withdateranges= {true}
        range="all"
        allow_symbol_change={true}
        save_image={false}
        details={true}
        hotlist={true}
        calendar= {true}
        news={[
          "stocktwits",
          "headlines"
        ]}
        studies={[
          "BB@tv-basicstudies",
          "MACD@tv-basicstudies",
          "MF@tv-basicstudies"
        ]}
      />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TradingViewWidget 
        width='auto'
        symbol='NYSE:PFSI' 
        timezone='Etc/UTC'
        theme= "Dark"
        style= "1"
        locale= "en"
        toolbar_bg= "#f1f3f6"
        enable_publishing= {false}
        withdateranges= {true}
        range="all"
        allow_symbol_change={true}
        save_image={false}
        details={true}
        hotlist={true}
        calendar= {true}
        news={[
          "stocktwits",
          "headlines"
        ]}
        studies={[
          "BB@tv-basicstudies",
          "MACD@tv-basicstudies",
          "MF@tv-basicstudies"
        ]}
      />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TradingViewWidget 
        width='auto'
        symbol='BITFINEX:BTCUSD' 
        timezone='Etc/UTC'
        theme= "Dark"
        style= "1"
        locale= "en"
        toolbar_bg= "#f1f3f6"
        enable_publishing= {false}
        withdateranges= {true}
        range="all"
        allow_symbol_change={true}
        save_image={false}
        details={true}
        hotlist={true}
        calendar= {true}
        news={[
          "stocktwits",
          "headlines"
        ]}
        studies={[
          "BB@tv-basicstudies",
          "MACD@tv-basicstudies",
          "MF@tv-basicstudies"
        ]}
      />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TradingViewWidget 
        width='auto'
        symbol='NYSE:NYA' 
        timezone='Etc/UTC'
        theme= "Dark"
        style= "1"
        locale= "en"
        toolbar_bg= "#f1f3f6"
        enable_publishing= {false}
        withdateranges= {true}
        range="all"
        allow_symbol_change={true}
        save_image={false}
        details={true}
        hotlist={true}
        calendar= {true}
        news={[
          "stocktwits",
          "headlines"
        ]}
        studies={[
          "BB@tv-basicstudies",
          "MACD@tv-basicstudies",
          "MF@tv-basicstudies"
        ]}
        
        // container_id="tradingview_f263f"
      />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <TradingViewWidget 
        width='auto'
        symbol='OANDA:BCOUSD' 
        timezone='Etc/UTC'
        theme= "Dark"
        style= "1"
        locale= "en"
        toolbar_bg= "#f1f3f6"
        enable_publishing= {false}
        withdateranges= {true}
        range="all"
        allow_symbol_change={true}
        save_image={false}
        details={true}
        hotlist={true}
        calendar= {true}
        news={[
          "stocktwits",
          "headlines"
        ]}
        studies={[
          "BB@tv-basicstudies",
          "MACD@tv-basicstudies",
          "MF@tv-basicstudies"
        ]}
      />
      </TabPanel>
      {/* <DashboardDefaultSection1 /> */}
      
      {/* <DashboardDefaultSection2 /> */}
      {/* <DashboardDefaultSection3 />
      <DashboardDefaultSection4 /> */}
    </Fragment>
  );
}
