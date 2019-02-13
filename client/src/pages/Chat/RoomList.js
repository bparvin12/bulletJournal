import React from "react"
import "./styles.css"

class RoomList extends React.Component {
    render() {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
        return (
            <div className="rooms-list">
                <h2 className="communities">Communities:</h2>
                    {orderedRooms.map(room => {
                        const active = this.props.roomId === room.id ? "active" : "";
                        return (
                            <p key={room.id} className={"room " + active}>
                                <button 
                                    className="btn btn-danger"  
                                    onClick={() => { this.props.subscribeToRoom(room.id) }} 
                                    href="#">
                                    {room.name}</button>
                            </p>
                        )
                    })}
            </div>
        )
    }
}

export default RoomList