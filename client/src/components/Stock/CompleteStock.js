import React, { Component } from "react";
import axios from "axios"
import "./CompleteStock.css";

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cryptos: []
        };
    }

    componentDidMount() {
        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,IOT&tsyms=USD&api_key=0d61e71af41659695433b6e5f52702f73b11c6367c53caf3e2d3544ac13ff56c")
            .then(res => {
                const cryptos = res.data.DISPLAY;
                console.log(cryptos);
                this.setState({ cryptos: cryptos });
            })
    }

    render() {
        return (
            <div className="table-container">
                {Object.keys(this.state.cryptos).map((key) => (

                        <table className="table table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">CryptoCurrency</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Market</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{this.state.cryptos[key].USD.FROMSYMBOL}</th>
                                    <td>{key}</td>
                                    <td>{this.state.cryptos[key].USD.PRICE}</td>
                                    <td>{this.state.cryptos[key].USD.MARKET}</td>
                                </tr>
                            </tbody>
                        </table>
                 
                ))}
            </div>
        )
    }

}

export default Stock;