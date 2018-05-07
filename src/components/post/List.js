/* src> components> Post > List.js */
import React from 'react';
import { connect } from 'react-redux';

import { PostItem } from '../../components';
import { fetchPost } from '../../redux/actions/postAction';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <label>Loading.....</label>}
        {this.props.errorMsg !== '' && <label>{this.props.errorMsg}</label>}
        {this.props.postDt.length > 0 &&
          this.props.postDt.map(post => (
            <PostItem key={post.id} postId={post.id} author={post.userId} isi={post.isi} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postDt: state.post.postDt,
  errorMsg: state.post.errorMsg,
  isLoading: state.post.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch(fetchPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
