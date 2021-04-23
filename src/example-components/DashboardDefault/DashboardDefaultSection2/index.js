import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BTCLogo from '../../../assets/images/icons/btc-brands.svg';

import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">Transaction history</div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Approx. in USD</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                    <IconButton
                      color="primary"
                      size="medium"
                      className="header-logo-wrapper-btn">
                      <img
                        className="app-header-logo-img"
                        alt="bitcoin logo"
                        src={BTCLogo}
                      />
                    </IconButton>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        1.2 BTC
                      </a>
                      
                    </div>
                  </td>
                  <td className="text-left">
                      <span className="font-weight-bold text-black" style={{opacity: '0.6'}}>
                        ≈1,400 USD
                      </span>
                  </td>
                  <td>
                      <span className="font-weight-bold text-black">
                        2021.05.17
                      </span>
                  </td>
                  <td>
                    <div className="badge badge-success px-4">Paid</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                    <IconButton
                      color="primary"
                      size="medium"
                      className="header-logo-wrapper-btn">
                      <img
                        className="app-header-logo-img"
                        alt="bitcoin logo"
                        src={BTCLogo}
                      />
                    </IconButton>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        1.2 BTC
                      </a>
                      
                    </div>
                  </td>
                  <td className="text-left">
                      <span className="font-weight-bold text-black" style={{opacity: '0.6'}}>
                        ≈1,400 USD
                      </span>
                  </td>
                  <td>
                      <span className="font-weight-bold text-black">
                        2021.05.17
                      </span>
                  </td>
                  <td>
                    <div className="badge badge-success px-4">Paid</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                    <IconButton
                      color="primary"
                      size="medium"
                      className="header-logo-wrapper-btn">
                      <img
                        className="app-header-logo-img"
                        alt="bitcoin logo"
                        src={BTCLogo}
                      />
                    </IconButton>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        1.2 BTC
                      </a>
                      
                    </div>
                  </td>
                  <td className="text-left">
                      <span className="font-weight-bold text-black" style={{opacity: '0.6'}}>
                        ≈1,400 USD
                      </span>
                  </td>
                  <td>
                      <span className="font-weight-bold text-black">
                        2021.05.17
                      </span>
                  </td>
                  <td>
                    <div className="badge badge-success px-4">Paid</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                    <IconButton
                      color="primary"
                      size="medium"
                      className="header-logo-wrapper-btn">
                      <img
                        className="app-header-logo-img"
                        alt="bitcoin logo"
                        src={BTCLogo}
                      />
                    </IconButton>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        1.2 BTC
                      </a>
                      
                    </div>
                  </td>
                  <td className="text-left">
                      <span className="font-weight-bold text-black" style={{opacity: '0.6'}}>
                        ≈1,400 USD
                      </span>
                  </td>
                  <td>
                      <span className="font-weight-bold text-black">
                        2021.05.17
                      </span>
                  </td>
                  <td>
                    <div className="badge badge-success px-4">Paid</div>
                  </td>
                </tr>
        
                {/* <tr>
                  <td>12</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Shanelle Wynn
                      </a>
                      <span className="text-black-50 d-block">
                        UI Engineer, Apple Inc.
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-warning px-4">Pending</div>
                  </td>
                  <td>
                    <LinearProgress value={55} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                
                <tr>
                  <td>12</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Regan Norris
                      </a>
                      <span className="text-black-50 d-block">
                        Senior Project Manager
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4">Failed</div>
                  </td>
                  <td>
                    <LinearProgress value={67} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                
                <tr>
                  <td>33</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Beck Simpson
                      </a>
                      <span className="text-black-50 d-block">
                        Frontend Developer
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Completed</div>
                  </td>
                  <td>
                    <LinearProgress value={39} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
               */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
