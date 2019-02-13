import React from "react";
import "./SearchForm.css"

const SearchForm = props => (
    <form>
        <div className="form-inline">
            <select
                className="form-control select-options"
                id="search"
                name="search"
                type="select"
                onChange={props.handleInputChange}
            >
                <option>BTC</option>
                <option>ETH</option>
                <option>IOT</option>
                <option>NEO</option>
                <option>LTC</option>
                <option>EOS</option>
                <option>BTT</option>
                <option>XRP</option>
                <option>ZEC</option>
                <option>BCH</option>
                <option>DASH</option>
                <option>QTUM</option>
            </select>
            <button onClick={props.handleFormSubmit} className="btn btn-danger add-button">
                ADD
            </button>
        </div>
    </form>
);

export default SearchForm;