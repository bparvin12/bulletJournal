import React from "react"
import ReactDOM from "react-dom"
import Message from "./Message"
import "./styles.css"

class MessageList extends React.Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
        }
    }

    render() {
        if (!this.props.roomId) {
            return(
                <div className="join-a-room">
                    <div className="align-middle alert alert-danger">
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.text} />   
                    )
                })}
            </div>
        )
    }
}

export default MessageList