import React, { Component } from 'react'

class Welcome extends Component{
    render(){
    console.log(this.props);
    return <h4>1953 – The mountaineers Edmund Hillary and Tenzing Norgay (both pictured) became the first people to reach the summit of Mount Everest.<br/>props.name:- {this.props.name} and props.heroName:- {this.props.heroName}</h4>
    }
}

export default Welcome