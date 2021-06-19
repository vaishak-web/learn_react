import React, { Component } from 'react'
import MemoComp from './MemoComp'


class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Vaishak"
        }
    }
    
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: 'Vaishak'
            })
        }, 2000)
    }
    render() {
        console.log('*****************************Parent Comp Render ***************************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
