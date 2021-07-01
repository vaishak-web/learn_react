import React, { Component } from 'react'

class ClicCounter2 extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount} >Clickedpart2 {count} Times</button>                
            </div>
        )
    }
}

export default ClicCounter2
