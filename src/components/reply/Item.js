import React from 'react';

const styles = {
  box: {
    padding: '0.5em'
  }
};
class Item extends React.Component {
  render() {
    return <div style={styles.box}>Reply Item</div>;
  }
}

export default Item;
