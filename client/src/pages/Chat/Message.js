import React from "react"

const Message = (props) => {
    return (
        <div className="message">
            <h6 className="message-username">{props.username}</h6>
            <div className="btn btn-primary disabled">{props.text}</div>
        </div>
    )
}

export default Message