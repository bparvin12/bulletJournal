import React from "react";

const styles = {
    div: {
        width: "300px"
    },
    iframe: {
        display: "block"
    },
    a: {
        margin: "-20px 0 0 0",
        textIndent: "-9999em",
        height: "20px",
        display: "block",
        zIndex: "1",
        position: "relative"
    }
};

const WeatherCard = () => (

<div style={styles.div}>
    <iframe style={styles.iframe} src="https://cdnres.willyweather.com/widget/loadView.html?id=101894" width="300" height="228" frameborder="0" scrolling="no"></iframe>
    <a style={styles.a} href="https://www.willyweather.com/ca/orange-county/irvine.html" rel="nofollow">local weather</a>
</div>

);



export default WeatherCard;