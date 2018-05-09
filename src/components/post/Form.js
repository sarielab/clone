/* src> components> post> Form.js */
import React from 'react';
import { connect } from 'react-redux';

import { Form } from '../../components';
import { addPost } from '../../redux/actions/postAction';

const formPost = [{ name: 'isi', placeholder: 'Your status...', type: 'text' }];

const initialState = {
  isi: ''
};

class PostForm extends React.Component {
  handleSubmit = data => {
    const { id, userId } = this.props.loginDt;
    this.props.handlePost({ isi: data.isi, id, userId });
  };
  render() {
    if (typeof this.props.loginDt.id === 'undefined') return <div />;
    return (
      <Form
        data={formPost}
        handleSubmit={this.handleSubmit}
        errorMsg={this.props.errorMsg}
        initialState={initialState}
        nama="Post"
      />
    );
  }
}

const mapStateToProps = state => ({
  loginDt: state.login.loginDt,
  errorMsg: state.post.errorMsg
});

const mapDispatchToProps = dispatch => ({
  handlePost: data => dispatch(addPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
