import React from 'react'
import "./Header.css"
import rdbLogo from '../Media/rdb-logo.png'
import novusLogo from '../Media/Novus-logo.png' 

const Header = () => {
 return (
    <div className='body'>
        <div className='RDB-logo'>
            <img id="rdb-logo-img" src={rdbLogo}/>
        </div>
        <div className='Novus-logo'>
            <img id="novus-logo-img" src={novusLogo}/>
        </div>
    </div>
 )
}

export default Header;