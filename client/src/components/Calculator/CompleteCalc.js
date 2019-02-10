import React, { Component } from "react";
import "./CompleteCalc.css"
import { Button } from "./Button";
import { Input } from "./Input";


class CompleteCalc extends React.Component {
    render () {
        return (
        <div className="complete-calc">
            <div className="calc-wrapper">
                <Input input={this.state.input}></Input>
                <div className="row">
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>/</Button>
                </div>
                <div className="row">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>X</Button>
                </div>
                <div className="row">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>+</Button>
                </div>
                <div className="row">
                    <Button>.</Button>
                    <Button>0</Button>
                    <Button>=</Button>
                    <Button>-</Button>
                </div>
            </div>
        </div>

        )
    }


}

export default CompleteCalc;