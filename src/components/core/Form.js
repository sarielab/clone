/* src> components > core > Form.js */
import React from 'react';
import { FormItem } from '../../components';

const styles = {
  form: {
    margin: '5%'
  }
};

class Form extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };
  state = {
    ...this.props.initialState
  };
  render() {
    const { nama, data, errorMsg } = this.props;
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <h1>{nama}</h1>
        {data.map((form, idx) => (
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
        <input type="submit" value={nama} />
      </form>
    );
  }
}

export default Form;
