import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const FillCard =  props => (
    <Card className = "cardWrapper" >
        <CardHeader className="fillCardHeader" >{props.children}</CardHeader>
        <CardContent className="fillCardContent">{props.children}</CardContent>
    </Card>
);

export default FillCard;