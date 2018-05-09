/* src> components> Reply > List.js */
import React from 'react';
import { connect } from 'react-redux';

import { ReplyItem } from '../../components';
import { fetchReply } from '../../redux/actions/replyAction';

class ReplyList extends React.Component {
  componentDidMount() {
    this.props.fetchReply();
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <label>Loading.....</label>}
        {this.props.errorMsg !== '' && <label>{this.props.errorMsg}</label>}
        {this.props.replyDt.length > 0 &&
          this.props.replyDt.map(reply => (
            <ReplyItem key={reply.id} replyId={reply.id} author={reply.userId} isi={reply.isi} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  replyDt: state.reply.replyDt,
  errorMsg: state.reply.errorMsg,
  isLoading: state.reply.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchReply: () => dispatch(fetchReply())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReplyList);
