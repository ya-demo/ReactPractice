import React, { Component } from 'react';
import { Consumer } from './context'
import './Modal.css'
import ModalLogin from './ModalLogin';

class Modal extends Component {

    renderContent = (modal, setState) =>{
        switch(modal) {
            case 'login': return <ModalLogin setState={setState}/>;
            default: return null;
        }
    }


    render() {
        return (<Consumer>
            {({ state, setState }) => {
                const { modal } = state;
                if (!modal) return null;
                return (<div className="modal">
                    <div className="modal-content">{this.renderContent(modal, setState)}</div>
                </div>);
            }}
        </Consumer>);
    }
}

export default Modal;