import React from "react"

class RoomList extends React.Component {
    render() {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
        return (
            <div className="rooms-list">
                <h3>Communities: </h3>
                    {orderedRooms.map(room => {
                        const active = this.props.roomId === room.id ? "active" : "";
                        return (
                            <p key={room.id} className={"room " + active}>
                                <a 
                                    className="room-link" 
                                    onClick={() => { this.props.subscribeToRoom(room.id) }} 
                                    href="#">
                                    {room.name}
                                </a>
                            </p>
                        )
                    })}
            </div>
        )
    }
}

export default RoomList