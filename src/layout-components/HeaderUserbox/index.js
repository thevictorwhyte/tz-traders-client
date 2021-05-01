import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar5 from '../../assets/images/avatars/avatar5.jpg';
export default function HeaderUserbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>

      <Button
        style={{
          height: '100%', 
          width: '100%',
          backgroundColor: '#815EF6', 
          border: 'none',
          borderRadius: 'none',
        }}
        color="inherit"
         onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
         {/* <Avatar sizes="44" alt="Emma Taylor" src={avatar5} /> */}
         <div style={{fontSize:'1.2rem'}} className="font-weight-bold pt-2 line-height-1">USD 0.00</div>
        </Box>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              {/* <Avatar sizes="44" alt="Emma Taylor" src={avatar5} /> */}
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                Ryan Kent
              </div>
              <span className="text-black-50 text-center">
                ryan.kent@outlook.com
              </span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button>Invest</ListItem>
            <ListItem button>Withdraw</ListItem>
            <ListItem button>Log out</ListItem>
            {/* <Divider className="w-100" />
            <ListItem className="d-block rounded-bottom px-3 pt-3 pb-0 text-center">
              <Tooltip arrow title="Twitter">
                <Button color="default" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </Tooltip>
            </ListItem> */}
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}
