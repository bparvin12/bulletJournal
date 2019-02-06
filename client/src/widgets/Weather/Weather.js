import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Weather.styles';
// import Button from '@material-ui/core/Button';
import WeatherCard from "../../components/WeatherWidget/WeatherCard"



const Weather = () => {
    // const { classes } = props;
    return (
        <WeatherCard />
    )
}


Weather.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Weather);