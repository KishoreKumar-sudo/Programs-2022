
import React from 'react'
class Counter extends React.Component {
    //qty = 1
    state = {
        qty: 1
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    render() {
        return <div>
            <h1>Counter Example</h1>
            <>&nbsp;&nbsp;</>
            <button onClick={this.decrHandler}>-</button>  
            <span>QTY:{this.state.qty}&nbsp;&nbsp;&nbsp;</span>
            <button onClick={this.incrHandler}>+</button>
        </div>
    }
}
export default Counter
