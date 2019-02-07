import React from "react";
import Grid from '@material-ui/core/Grid';
import Chatkit from "@pusher/chatkit"
import MessageList from "./MessageList"
import SendMessageForm from "./SendMessageForm"
import RoomList from "./RoomList"
import NewRoomForm from "./NewRoomForm"
import "./styles.css"
import { tokenUrl, instanceLocator } from "../../config";

const styles = {
    roomlist: {
        height: "500px",
    },
    messagelist: {
        height: "500px",
    },
}

class CompleteChat extends React.Component {

    constructor() {
        super()
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: "janedoe",
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                this.getRooms()

            })
            .catch(err => console.log('error on joinableRooms: ', err))
    }

    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            .catch(err => console.log('error on joinableRooms: ', err))
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    console.log('message.text: ', message.text);
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text: text,
            roomId: this.state.roomId
        })
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log('error with createRoom: ', err))
    }

    render() {
        return (
            <div className="completeChat">
                <Grid
                    spacing={16}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <Grid style={styles.roomlist} item xs={4} className="room-grid panel panel-default">
                        <RoomList 
                            roomId={this.state.roomId}
                            subscribeToRoom={this.subscribeToRoom} 
                            rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
                    </Grid>
                    <Grid style={styles.messagelist} item xs={8} className="message-grid panel panel-default">
                        <MessageList 
                            roomId={this.state.roomId}
                            messages={this.state.messages} />
                    </Grid>
                    <Grid style={styles.sendmessageform} item xs={4} className="panel panel-default">
                        <NewRoomForm createRoom={this.createRoom}/>
                    </Grid>
                    <Grid style={styles.newroomform} item xs={8} className="panel panel-default">
                        <SendMessageForm 
                            disabled={!this.state.roomId}
                            sendMessage={this.sendMessage} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}



export default (CompleteChat);