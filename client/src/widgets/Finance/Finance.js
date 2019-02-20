import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Finance.styles';
import PieChart from '../../components/Charts/PieChart';
//TODO: remove this variable and use state or props instead
const chartData = {
    labels: ['Personal', 'Education', 'Utilities', 'Savings', 'Entertainment', 'Retirement'],
    datasets: [
        {
            label: 'Budget',
            data: [
                28000,
                20000,
                14000,
                12000,
                10000,
                8000,
                6000,
                2000,
            ],
            backgroundColor:[
                'rgba(0, 0, 255, 1)',
                // 'rgba(0, 255, 0, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(128, 0, 128, 1)',
                // 'rgba(128, 128, 128, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                // 'rgba(0, 255, 0, 1)',
            ]
        }
    ] 
};

const Finance = (props) => {
    // const { classes } = props;
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
