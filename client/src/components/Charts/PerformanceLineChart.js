import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

class PerformanceLineChart extends Component {
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
                            'rgba(0, 204, 204)',
                        ],
                        fill: [
                            'linear-gradient(45deg, #009999 30%, #00e6e6 90%)',
                        ],         
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

export default PerformanceLineChart;
