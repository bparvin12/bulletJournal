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
// import Card from '@material-ui/core/Card';
import BarChart from "../../components/Charts/BarChart";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LineChart from '../../components/Charts/LineChart';
import { Link } from 'react-router-dom';
import axios from "axios";
// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";


class CalorieTracker extends Component {
    // Initialize this.state.Health as an empty array
    state = {
        dailyCalorieCount: [],
        positiveCalories: "",
        negativeCalories: ""
    };

    // Add code here to get all recordedData from the database and save them to this.state.dailyCalorieCount
    componentDidMount = () => {
        axios.get('/calorieTrackers/5c632d423145d8e69dd96f74').then(response => {
            const recordedData = response.data;
            console.log(response);
            console.log("recordedData: " + recordedData);
            console.log("recordedData.length: " + recordedData.length);
            const arr = []
            var dateContainedData = false;
            var numberOfHistoricalDays = 14;
            for (var i = 0; i < numberOfHistoricalDays; i++) {
                const date = moment().subtract('days', i);
                var m = moment(date,"YYYY-MM-DD");
                var s = m.format("YYYY-MM-DD");
                console.log("Checking for date: " + s);

                //  loop through recordedData to find the first match for the given
                //  historical day
                for (var j = 0; j < recordedData.length; j++) {
                    var t = moment(recordedData[j].date,"YYYY-MM-DD");
                    var u = t.format("YYYY-MM-DD");
                    console.log("recordedData[i].date: " + u);

                    if(date.isSame(t, 'day')) {
                        console.log("MATCH!!!!!! for " + u);
                        var positiveCalories = 0;
                        var negativeCalories = 0;
                        if (typeof recordedData[j] !== 'undefined') {
                            positiveCalories = recordedData[j].positiveCalories
                        }
                        if (typeof recordedData[j] !== 'undefined') {
                            negativeCalories = recordedData[j].negativeCalories
                        }
                        arr.push({
                            date, //
                            positiveCalorieIntake: positiveCalories,
                            negativeCalorieIntake: negativeCalories
                        });
                        dateContainedData = true;
                        //  break out of loop to take only first occurrence of recorded data that matches the date
                        break;
                    }
                }
                if(!dateContainedData) {
                    arr.push({
                        date, //
                        positiveCalorieIntake: 0,
                        negativeCalorieIntake: 0
                    });
                }
                dateContainedData = false;
                //TODO: loop through recordedData, and if month day and year are the same 
            //     this.setState = (!moment(recordedData, 'MM-DD-YYYY').isSame()){  
            //     then.append.arr};
            // }
                // (using moment to get month day and year) and then make that array item
                // if found into the data part below
                /*
                arr.push({
                    date, //
                    positiveCalorieIntake: recordedData[i].positiveCalories,
                    negativeCalorieIntake: recordedData[i].negativeCalories
                });
                */
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
                                    <ListItemIcon> <TextFieldButton date={hotdog.date.format('MMMM Do YYYY')} negativeCalorieIntake={hotdog.negativeCalorieIntake} positiveCalorieIntake={hotdog.positiveCalorieIntake} /></ListItemIcon>
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