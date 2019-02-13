import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import API from "../../utils/API";
import styles from './Health.styles';
import TextFieldButton from '../../components/TextFieldButton';
import moment from "moment";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

class CalorieTracker extends Component {
    // Initialize this.state.Health as an empty array
    state = {
        dailyCalorieCount: [],
        positiveCalories: "",
        negativeCalories: ""
    };

    componentDidMount() {
        const arr = []
        for (var i = 0; i < 7; i++) {
            arr.push({
                date: moment().subtract('days', i)
            });
        }
        // console.log(arr) ***replacing console log with setState
        this.setState({
            dailyCalorieCount:arr 
            // ***setting the variable "dailyCalorieCount" to the array
          });
    }

    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmit = event => {
        event.preventDefault();
        API.saveCalorieTracker({
            positiveCalories: this.state.positiveCalories,
            negativeCalories: this.state.negativeCalories
        }).then(results => {
            this.setState({
                dailyCalorieCount: [results.data, ...this.state.dailyCalorieCount],
                positiveCalories: "",
                negativeCalories: ""
            });
            console.log(results);
        })
    };

    loadCalorieTrackerCounts = () => {
        API.getCalorieTrackers()
            .then(res =>
                this.setState({ dailyCalorieCount: res.data, positiveCalories: "", negativeCalories: "" })
            )
            .catch(err => console.log(err));
    };

    deleteCalorieTracker = id => {
        API.deleteCalorieTracker(id).then(() => {
            this.setState({
                calorieTrackers: this.state.calorieTrackers.filter(calorieTracker => calorieTracker._id !== id),
            });
        });
    }

    // taking "this.props" and puts it in a variable called "classes"
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3 className={classes.input}>THIS IS 7 DAYS OF HEALTH!!</h3>
                <List>
                    {['Day 1', 'Day 2', 'Day 3', 'Day4', 'Day 5', 'Day 6', 'Day'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 7 === 0 ? <TextFieldButton /> : <TextFieldButton />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}


export default withStyles(styles)(CalorieTracker);