import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';

export default props => 
<div className="chart">
    <Pie
    data={props.chartData}
    width={props.width}
    height={props.height}
    options={{
        maintainAspectRatio: false
        }}
    />
</div>;

class PieChart extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div className="chart">
                <Pie
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

export default PieChart;
