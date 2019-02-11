import React, { Component } from "react";
import axios from "axios"

class Stock extends Component {
    cosntructor(props) {
        super(props);
        
        this.state = {
            cryptos: []
        }; 
    }

    componentDidMount() {
        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,IOT&tsyms=USD&api_key=0d61e71af41659695433b6e5f52702f73b11c6367c53caf3e2d3544ac13ff56c")
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            })
    }
   
}