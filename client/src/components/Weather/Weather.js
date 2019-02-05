import React, { Component } from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import PaperSheet from "../Paper";
// import Paper from '@material-ui/core/Paper';

// import Card from "../Card";
import API from "../../utils/API";


class WeatherContainer extends Component {
    state = {
        date: "",
        result: null,
        search: "",
    };

    //When this component mounts, seach for the location
    componentDidMount = () => {
        this.searchLocation("92705,us");
    };

    searchLocation = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
        // console.log(res.data);
    };

    handleInputChange = event => {
        //getting the value and the name of the input which triggered the change 
        const { name, value } = event.target;

        //updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchLocation(this.state.search);
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <h3>{this.state.result ? this.state.result.main.temp : "loading..."} &deg;F</h3>
                </div>
                <div>
                    <img alt={""} src={this.state.result ? "./images/" + this.state.result.weather[0].icon + ".png" : "loading..."} width="50" height="50" />
                </div>
            </div>
        )
    }

}

export default WeatherContainer;