
import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
// import ToDoTask from '../../widgets/Todos/ToDoTask';



const ListItemPrimary = (props) => {
    const statusBullet = (taskStatus) => {

        switch (taskStatus) {
            case "started":
                return (<i className="material-icons">radio_button_checked</i>);
            case "postponed":
                return (<i className="material-icons">play_circle_outline</i>);
            case "completed":
                return (<i className="material-icons">check_circle_outline</i>);
            case "canceled":
                return (<i className="material-icons">cancel</i>);
            default:
                return (<i className="material-icons">radio_button_unchecked</i>);
        }
    };

    return (
        <div>
            <ListItemIcon dense="true">
                {/* should technically call statusBullet() and return the material-icon with the corresponding status */}
                {statusBullet(props.task.status)}
            </ListItemIcon>
            <ListItemText
                primary={props.task.task}
            />
        </div>
    );
}


ListItemPrimary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (ListItemPrimary);


