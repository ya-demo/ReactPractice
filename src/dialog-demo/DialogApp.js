import React, { Component } from 'react';
import Header from './Header'
import Modal from './Modal'
import './DialogApp.css'
import { Provider } from './context'


class DialogApp extends Component {
    state = {
        modal: null,
        login: false
    }
    render() {
        const contextValue = {
            state: this.state,
            setState: this.setState.bind(this)
        }
        return (
            <Provider value={contextValue}>
                <div className="app">
                    <Header />
                    <Modal />
                </div>
            </Provider>
        );
    }
}

export default DialogApp;