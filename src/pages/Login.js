/* src > pages > Login.js */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Form } from '../components';
import { login } from '../redux/actions/login';

const formLogin = [
  { name: 'username', placeholder: 'username', type: 'text' },
  { name: 'password', placeholder: 'password', type: 'password' }
];

const initialState = {
  username: '',
  password: ''
};

class Login extends React.Component {
  handleSubmit = data => {
    this.props.handleLogin(data);
  };
  render() {
    if (typeof this.props.loginDt.id !== 'undefined') return <Redirect to="/" />; // redirect ke timeline
    return (
      <Form
        data={formLogin}
        handleSubmit={this.handleSubmit}
        errorMsg={this.props.errorMsg}
        initialState={initialState}
        nama="Login"
      />
    );
  }
}

const mapStateToProps = state => ({
  loginDt: state.login.loginDt,
  errorMsg: state.login.errorMsg
});

const mapDispatchToProps = dispatch => ({
  handleLogin: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
