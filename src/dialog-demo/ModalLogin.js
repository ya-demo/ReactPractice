import React, { Component } from 'react';
import axios from 'axios';

class ModalLogin extends Component {
    state ={
        username: '',
        password: ''
    }

    onChangeAcc = e =>{
        this.setState({
            username: e.target.value
        })
    }
    onChangePw = e =>{
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = e =>{
        e.preventDefault();
        const {username, password} = this.state;
        axios.post('http://localhost:3001/api/login', {username, password})
        .then(rs=>{
            console.log(rs)
            if(rs.data.success){
                this.props.setState({
                    modal: null,
                    login: true
                })
            }
        })
    }

    render() {
        const {username, password} = this.state
        return (

            <form className="modal-login" onSubmit={this.onSubmit}>
                <input type="text" value={username} onChange={this.onChangeAcc}></input>
                <br />
                <input type="password" value={password} onChange={this.onChangePw}></input>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ModalLogin;