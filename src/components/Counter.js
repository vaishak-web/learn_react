import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incerment(){
    // this.setState({
    //   count:this.state.count+1
    // },() =>{console.log(this.state.count)})
  
    this.setState((prevState, props) => ({
      count: prevState.count+props.addValue
    }),() =>{console.log(this.state.count)})
  
  }

  incermentFive(){
    this.incerment()
    this.incerment()
    this.incerment()
    this.incerment()
    this.incerment()
  }
  render() {
    
    return (
      <div>
        <div>
        Count - {this.state.count}
      </div>
      <button onClick={() => this.incerment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
