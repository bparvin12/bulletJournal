import React from "react";
import { Card } from "@material-ui/core";

const Card =  props => {
    // const { classes } = props;
    
    return <Card className="toDoWrapper" >{props.children}</Card>;
};

export default Card;