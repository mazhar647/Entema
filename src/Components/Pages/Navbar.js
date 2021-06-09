import React, {useState} from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';


const Navbar = ({ }) => {























return (
    <div>
  
    <nav class="navbar navbar-expand-lg "

    style={{paddingTop:'30px',height:'35px'}}
>
  
    <div
      style={{
        padding: '2px',
       marginLeft:'120px',
       marginTop:'-32px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: '1px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
    <p className="logo1">E<span className="logo2">ntema</span></p>
    </div>
   
  </nav>

    </div>

    );
};

export default Navbar;