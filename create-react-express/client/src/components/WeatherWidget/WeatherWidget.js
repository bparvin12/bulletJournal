import React, { Component } from "react";
import API from "../../utils/API";

class WeatherWidget extends Component {
    state = {
        result: null,
        search: ""
    }

    componentDidMount = () => {
        this.searchLocation("irvine")
    }

    searchLocation = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            // <a class="weatherwidget-io" href="https://forecast7.com/en/33d68n117d83/irvine/?unit=us" data-label_1="IRVINE" data-label_2="WEATHER" data-theme="original" >IRVINE WEATHER</a>
            <a class="weatherwidget-io" href="https://forecast7.com/en/33d68n117d83/irvine/?unit=us" data-label_1="IRVINE" data-label_2="WEATHER" data-font="Roboto Slab" data-mode="Current" data-days="3" data-theme="original" >IRVINE WEATHER</a>
            )
    }
    

};

export default WeatherWidget;