/* pages > Login.js */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FormItem } from '../components';
import { login } from '../redux/actions/login';

const styles = {
  form: {
    margin: '5%'
  }
};
const formLogin = [
  { name: 'username', placeholder: 'username', type: 'text' },
  { name: 'password', placeholder: 'password', type: 'password' }
];

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (typeof this.props.loginDt.id !== 'undefined') return <Redirect to="/" />; // redirect ke timeline
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        {formLogin.map((form, idx) => (
          <FormItem
            key={idx}
            name={form.name}
            handleChange={this.handleChange}
            type={form.type}
            placeholder={form.placeholder}
            value={this.state[form.name]}
          />
        ))}
        <label>{this.props.errorMsg}</label>
        <input type="submit" value="Login" />
      </form>
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
