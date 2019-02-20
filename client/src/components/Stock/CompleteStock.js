import React, { Component } from "react";
import "./CompleteStock.css";
import { Row, Col } from 'react-flexbox-grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SearchForm from "./SearchForm";
// import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import API from "../../utils/StockAPI";

class Stock extends Component {
    state = {
        result: [],
        search: "",
        currencies: ["BTC", "ETH", "IOT"]
    };

    componentDidMount = () => {
        this.searchCurrencies(this.state.currencies)
    }

    searchCurrencies = (query) => {
        API.search(query.join(","))
            .then(res => this.setState({ result: res.data.DISPLAY }))
            .catch(err => console.log(err));
    };

    // query is a string ex. BTC
    deleteCurrency = query => {
        //   search thro currencies and remove BTC
        const currencies = this.state.currencies.filter(currency => currency !== query)
        this.setState({
            currencies,
            search: ""
        })
        this.searchCurrencies(currencies);

    }

    handleInputChange = event => {
        //getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        //updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const currencies = [...this.state.currencies, this.state.search]
        this.setState({
            currencies,
            search: ""
        })
        this.searchCurrencies(currencies);
    }


    render() {
        return (
            <div className="table-container">
                <List>
                    <ListItem>
                        <ListItemText>
                            <Row className="header" start="xs">
                                <Col xs={2}>Symbol</Col>
                                <Col xs>CryptoCurrency</Col>
                                <Col xs>Price</Col>
                                <Col xs>Market</Col>
                                {/* <Col xs></Col> */}
                            </Row>
                        </ListItemText>
                    </ListItem>
                </List>

                {Object.keys(this.state.result).map((key) => (
                    <List className="list" disablePadding="true">
                        <ListItem key={key} button>
                            <ListItemText>
                                <Row start="xs">
                                    <Col xs={2} className="symbol">{this.state.result[key].USD.FROMSYMBOL}</Col>
                                    <Col xs className="key">{key}</Col>
                                    <Col xs className="price">{this.state.result[key].USD.PRICE}</Col>
                                    <Col xs className="market">{this.state.result[key].USD.MARKET}</Col>
                                    <DeleteIcon
                                        color="secondary"
                                        onClick={() => this.deleteCurrency(key)}
                                    />
                                </Row>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </List>
                ))}
                <br></br>
                <Row bottom="xs" end="xs">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Row>

            </div>
        )
    }

}

export default Stock;