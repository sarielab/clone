import React from 'react';
import { connect } from 'react-redux';

// import { listenRequest } from '../../helpers/request';

class Header extends React.Component {
  state = {
    total: 0
  };
  componentDidMount() {
    // const { userId } = this.props;
    // listenRequest(userId, data => {
    //   if (data.val() !== null) {
    //     const total = JSON.parse(data.val()).tot;
    //     if (this.props.userId === userId && total !== 0) {
    //       this.setState({
    //         total
    //       });
    //     }
    //   }
    // });
  }
  render() {
    return (
      <Header>
        <b>Notif {this.state.total}</b>
      </Header>
    );
  }
}
export default Header;
// const mapStateToProps = state => ({
//   userId: state.login.loginDt.userId
// });
//
// const mapDispatchToProps = dispatch => ({
//   // handleLogin: data => dispatch(login(data))
// });
//
// export default connect(mapStateToProps, null)(Header);
