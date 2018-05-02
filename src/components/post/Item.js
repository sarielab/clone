import React from 'react';

const styles = {
  box: {
    padding: '0.5em'
  }
};
class Item extends React.Component {
  render() {
    return (
      <div style={styles.box}>
        <label>{this.props.author}</label>
        <p>{this.props.isi}</p>
      </div>
    );
  }
}

export default Item;
