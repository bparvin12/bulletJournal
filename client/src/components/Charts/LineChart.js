import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [
                    {
                        label: 'Task Completion',
                        color: 'white',
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
                        ],
                        fillColor: 'linear-gradient(90deg, #blue 100%, white 40%)',
                        pointBackgroundColor: 'rgba(0, 0, 255, 1)',
                        borderWidth: 4,
                        pointBorderWidth: 5,
                        lineTension: .5,
                        textColor: 'white',
                        width: '100%'
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
                    maintainAspectRatio: false,
                    showLines: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 255, 0.2)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]
                    }

                    }}
                />
            </div>
        )
    }
}

export default LineChart;
