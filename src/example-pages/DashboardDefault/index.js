import React, { Fragment } from 'react';
import TradingViewWidget  from 'react-tradingview-widget';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
export default function DashboardDefault() {
  return (
    <Fragment>

      {/* <DashboardDefaultSection1 /> */}
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
      {/* <DashboardDefaultSection2 /> */}
      {/* <DashboardDefaultSection3 />
      <DashboardDefaultSection4 /> */}
    </Fragment>
  );
}
