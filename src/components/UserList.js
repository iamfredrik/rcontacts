import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    if(Object.getOwnPropertyNames(this.props.users).length === 0){
      return (<div></div>)
    }
    if (this.props.users.data){
        var userNodes = this.props.users.data.map(user => {
        return(
          <User firstname={user.first_name} lastname={user.last_name} key={user.id}>
            {user.firstname}
          </User>
        )
      });
    }
    return (
      <div>
        <h1>Users</h1>
        {userNodes}
      </div>
    );
  }
}

export default UserList;
