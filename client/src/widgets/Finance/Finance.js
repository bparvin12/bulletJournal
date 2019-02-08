import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Finance.styles';
import PieChart from '../../components/Charts/PieChart';
//TODO: remove this variable and use state or props instead
const chartData = {
    labels: ['Personal', 'Education', 'Insurance', 'Utilities', 'Savings', 'Medical/Healthcare', 'Entertainment', 'Gifts/Donations','Retirement'],
    datasets: [
        {
            label: 'Finance: Budget',
            data: [
                17508009,
                12133009,
                14486903,
                19107009,
                11103800,
                16095009,
            ],
            backgroundColor:[
                'rgba(0, 0, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(128, 0, 128, 1)',
                'rgba(128, 128, 128, 1)',
                'rgba(255, 0, 0, 1)',
            ]
        }
    ] 
};

const Finance = (props) => {
    const { classes } = props;
    return (
        <div>
            <PieChart chartData={chartData} width={50} height={200} />
        </div>
    )
}

Finance.propTypes = {
  classes: PropTypes.object.isRequired,
};

 
export default withStyles(styles)(Finance);
