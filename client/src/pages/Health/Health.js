import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import API from "../utils/API";
import styles from './Health.styles';
import Button from '@material-ui/core/Button';
import TextFieldButton from '../../components/TextFieldButton';
import Grid from '@material-ui/core/Grid';



const Health = (props) => {
    const { classes } = props;
    return (
        <div>
            <h3 className={classes.input}>THIS IS 7 DAYS OF HEALTH!!</h3>
            <h4 className={classes.subinput}>Day 1</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
            <h4 className={classes.subinput}>Day 2</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
            <h4 className={classes.subinput}>Day 3</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
            <h4 className={classes.subinput}>Day 4</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
            <h4 className={classes.subinput}>Day 5</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
            <h4 className={classes.subinput}>Day 6</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
            <h4 className={classes.subinput}>Day 7</h4>
            <Grid container="fluid" item xs={6}>
                <TextFieldButton />
                <Button variant="contained" className={classes.button}>"Click to Save"</Button>
            </Grid>
        </div>

    )
}


Health.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Health);