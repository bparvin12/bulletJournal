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
import Card from '@material-ui/core/Card';
import BarChart from "../../components/Charts/BarChart";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LineChart from '../../components/Charts/LineChart';
import { Link } from 'react-router-dom';
import axios from "axios";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";


class CalorieTracker extends Component {
    // Initialize this.state.Health as an empty array
    state = {
        dailyCalorieCount: [],
        positiveCalories: "",
        negativeCalories: ""
    };

    // Add code here to get all books from the database and save them to this.state.books
    componentDidMount = () => {
        axios.get('/api/calorieTrackers').then(response => {
            console.log(response);
            const arr = []
            for (var i = 0; i < 7; i++) {
                arr.push({
                    date: moment().subtract('days', i),
                    data: {
                        positiveCalories: 'from server',
                        negativeCalories: 'from server'
                    }
                });
            }
            // console.log(arr) ***replacing console log with setState
            this.setState({
                dailyCalorieCount: arr
                // ***setting the variable "dailyCalorieCount" to the array
            });
        })
    }

    // componentDidMount() {
    //     const arr = []
    //     for (var i = 0; i < 7; i++) {
    //         arr.push({
    //             date: moment().subtract('days', i),
    //             data: {
    //                 positiveCalories: 'from server',
    //                 negativeCalories: 'from server'
    //             }
    //         });
    //     }
    //     // console.log(arr) ***replacing console log with setState
    //     this.setState({
    //         dailyCalorieCount: arr
    //         // ***setting the variable "dailyCalorieCount" to the array
    //     });
    // }

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

            <Grid container
                direction="row"
                justify="right"
                alignItems="right"
                spacing={24} >
         
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <h3 className={classes.input} aligh='center'>Monthly Progress</h3>
                            <Typography className={classes.title} variant="h4" align="left" color='primary' noWrap>
                                <Link className='health-link' to='../Health/Health.js'>Health Stats:</Link>
                            </Typography>
                            <BarChart height="340" />
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <h3 className={classes.input} aligh='center'>Health Goals - Annual Progress</h3>
                            <Typography className={classes.title} variant="h4" align="left" color='primary' noWrap>
                                <Link className='health-link' to='../Health/Health.js'>Health Stats:</Link>
                            </Typography>
                            <LineChart height="340" />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} alignItems="right" >
                        <List>
                            {this.state.dailyCalorieCount.map((hotdog) => (
                                <ListItem button key={"test"}>
                                    <ListItemIcon> <TextFieldButton date={hotdog.date.format('MMMM Do YYYY')} /></ListItemIcon>
                                    <ListItemText primary={hotdog.date.format('MMMM Do YYYY')} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                </Grid>
                );
            }
        }
        
        
export default withStyles(styles)(CalorieTracker);