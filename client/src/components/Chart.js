import React, {Component} from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['San Diego', 'La Jolla', 'Santa Ana', 'Irvine', 'Costa Mesa', 'Los Angeles'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            1608009,
                            11133009,
                            11186903,
                            11107009,
                            11103800,
                            1195009
                        ],
                        backgroundColor:[
                            'rgba(255, 99,132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
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
                // width={100}
                // height={50}
                options={{
                    maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default Chart;
