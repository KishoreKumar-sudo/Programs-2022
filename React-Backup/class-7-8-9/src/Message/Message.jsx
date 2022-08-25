import React from 'react'
class Message extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        message: "Hii"
    }
    changeMessageHandler = () => {
        this.setState({message: "Hello,Mr Kishore Kumar, GA"})
    }
    render () {
        console.log("second time - render and after updating state");
        return <div>
                <h1>Wish Message:{this.state.message}</h1>
                <button onClick={this.changeMessageHandler}>Change it Buddy</button>
            </div>
    }
}
export default Message