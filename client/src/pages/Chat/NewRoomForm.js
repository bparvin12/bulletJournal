import React from "react"

class NewRoomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            roomName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            roomName: e.target.value
        })
    }

    handelSubmit(e) {
        e.preventDefault()
        this.props.createRoom(this.state.roomName)
        this.setState({ roomName: '' })
    }

    render() {
        return (
            <div className="new-room-form">
                <form onSubmit={this.handelSubmit}>
                    <input
                        value={this.state.roomName}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="NewRoomForm"
                        required
                    />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default NewRoomForm