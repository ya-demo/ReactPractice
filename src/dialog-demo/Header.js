import React from 'react';
import './Header.css'
import { Consumer } from './context'

const Header = () => {
   return  <Consumer>
        {({ setState }) => (
            <div className="header">
                <span>
                    <a href="/" onClick={(e) => {
                        e.preventDefault(); //避免連點
                        setState({ modal: 'login' });
                    }}>Login</a>
                </span>
            </div>
        )}
    </Consumer>
}

export default Header;