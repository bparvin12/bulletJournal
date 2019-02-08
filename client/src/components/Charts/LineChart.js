import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Task Completion',
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
                        backgroundColor:[
                            'rgba(0, 0, 255, 1)',
                            'rgba(0, 255, 0, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(128, 128, 128, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(0, 0, 255, 1)',
                            'rgba(0, 255, 0, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(128, 128, 128, 1)',
                            'rgba(255, 0, 0, 1)',
                        ]
                    }
                ] 
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Line
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

export default LineChart;
