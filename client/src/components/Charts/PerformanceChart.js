import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';

class PerformanceChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [
                    {
                        label: 'Performance',
                        data: [
                            17508009,
                            12133009,
                            14486903,
                            19107009,
                            11103800,
                            16095009,
                            10133009,
                            14486903,
                            17107009,
                            13486903,
                            15107009,
                            11103800,
                        ],
                        borderColor:[
                            'rgb(51, 102, 255)',
                            'rgb(0, 153, 153)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(230, 0, 230)',
                            'rgba(255, 0, 0, 1)',
                            'rgb(51, 102, 255)',
                            'rgba(0, 255, 0, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(128, 128, 128, 1)',
                            'rgba(255, 0, 0, 1)',
                        ],
                        borderWidth: 2,
                        textColor: 'white'          
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

export default PerformanceChart;
