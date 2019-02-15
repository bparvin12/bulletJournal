import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

class LineChartPurple extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [
                    {
                        label: 'Task Completion',
                        data: [
                            17508009,
                            14033009,
                            16486903,
                            19107009,
                            14103800,
                            16095009,
                        ],
                        borderColor:[
                            'rgba(0, 255, 255, 1)',
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
                    maintainAspectRatio: false,
                    }}
                />
            </div>
        )
    }
}

export default LineChartPurple;
