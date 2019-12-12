import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import UserList from './components/UserList';
import './App.css';

import {fetchUsers} from './actions/userActions';

function mapsStateToProps(store) {
  return {
    users: store.users.users
  }
}

/*function mapDispachToProps(dispatch) {
  return bindActionCreators(fetchUsers, dispatch);
}*/

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div>
        My app Component
        <UserList users={this.props.users}/>
      </div>
    );
  }
}

export default connect(mapsStateToProps)(App);
