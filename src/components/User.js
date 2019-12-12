import React, { Component } from 'react';

class User extends Component {
  render(){
    return (
      <div>
        {this.props.firstname} {this.props.lastname}
      </div>
    );
  }
}
export default User;
