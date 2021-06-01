import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Short circuit Operstor: Approach 4
    return this.state.isLoggedIn && <div>Welcome Vaishak</div>;

    // Using conditional operator: Approach 3
    // return (
    //   <div>{this.state.isLoggedIn ? "Welcome Vaishak" : "Welcome Guest"}</div>
    // );

    // Using if else outside return using variable: Approach 2
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vaishak</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // Using if else outside return as JSX doesnot support if else: Approach 1
    // if(this.state.isLoggedIn){
    //   return(
    //     <div>Welcome Vaishak</div>
    //   )
    // }else{
    //   return(
    //     <div>Welcome Guests</div>
    //   )
    // }

    // Normal return without condition: Approach 1
    // return (
    //   <div>
    //     <div>
    //     Welcome Vaishak
    //   </div>
    //   <div>
    //     Welcome Guest
    //   </div>
    //   </div>
    // )
  }
}

export default UserGreeting;
