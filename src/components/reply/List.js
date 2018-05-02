/* src> components> PostList.js */
import React from 'react';

import { PostItem } from '../../components';

const postDt = [
  {
    isi: 'isi1',
    author: 'joni',
    postId: '1'
  },
  {
    isi: 'isi2',
    author: 'budi',
    postId: '2'
  }
];

class PostList extends React.Component {
  render() {
    return (
      <div>{postDt.map(post => <PostItem key={post.id} postId={post.id} author={post.author} isi={post.isi} />)}</div>
    );
  }
}

export default PostList;
