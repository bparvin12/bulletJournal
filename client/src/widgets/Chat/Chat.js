import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Chat.styles';


const Chat = (props) => {
    const { classes } = props;
    return (
        <div className="well text-center">
            <h3>Community Chat</h3>
            <p>Please join our community, and get involved in upcoming events with people who have similar dreams and aspirations</p>
            <button href="/chat" className="btn btn-success">
                Get Involved
            </button>
        </div>
        
    )
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Chat);
