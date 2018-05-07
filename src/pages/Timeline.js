import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { PostForm, PostList } from '../components';

class Timeline extends React.Component {
  render() {
    if (typeof this.props.loginDt.id === 'undefined') return <Redirect to="/login" />;
    // kalau ga ada maka redirect ke login

    return (
      <div>
        Timeline
        <PostForm />
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginDt: state.login.loginDt
});

export default connect(mapStateToProps, null)(Timeline);
