import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const FillCardHeader =  props => (

    <CardHeader className="toDoWrapper" >{props.children}</Card>;

);

export default FillCardHeader;