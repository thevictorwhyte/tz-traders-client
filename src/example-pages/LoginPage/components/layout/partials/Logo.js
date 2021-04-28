import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/" style={{display: 'flex'}}>
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={32}
            height={15} 
            />
          <span style={{fontSize: '1rem', marginLeft: '.5rem'}}>TZ Traders</span>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;