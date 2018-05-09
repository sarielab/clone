/* src> components> reply> Form.js */
import React from 'react';
import { connect } from 'react-redux';

import { Form } from '../../components';
import { addReply } from '../../redux/actions/replyAction';

const formReply = [{ name: 'isi', placeholder: 'Your reply...', type: 'text' }];

const initialState = {
  isi: ''
};

class ReplyForm extends React.Component {
  handleSubmit = data => {
    const { id, userId } = this.props.loginDt;
    const { postId } = this.props;
    this.props.handleReply({
      isi: data.isi,
      access_token: id,
      userId,
      postId
    });
  };
  render() {
    if (typeof this.props.loginDt.id === 'undefined') return <div />;
    return (
      <Form
        data={formReply}
        handleSubmit={this.handleSubmit}
        errorMsg={this.props.errorMsg}
        initialState={initialState}
        nama="Reply"
      />
    );
  }
}

const mapStateToProps = state => ({
  loginDt: state.login.loginDt,
  errorMsg: state.reply.errorMsg
});

const mapDispatchToProps = dispatch => ({
  handleReply: data => dispatch(addReply(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm);
