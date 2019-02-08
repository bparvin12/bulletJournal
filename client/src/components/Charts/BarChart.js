import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June',],
                datasets: [
                    {
                        label: 'Goals Achieved',
                        data: [
                            17508009,
                            19107009,
                            16095009,
                            14486903,
                            17107009,
                            15107009,
                        ],
                        backgroundColor:[
                            'rgba(0, 0, 255, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(0, 0, 255, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                        ]
                    }
                ] 
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                data={this.state.chartData}
                width={50}
                height={200}
                options={{
                    maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default BarChart;
