import React from "react";



const styles = {
    div: {
        display: "flex",
        width: "100%%"
    },
    iframe: {
        display: "flex",
        width: "100%"
    },
    a: {
        textIndent: "-9999em",
        display: "flex",
        margin: "-20px 0 0 0",
        height: "20px",
        zIndex: "1",
        position: "relative"
    }
}

const WeatherCard = () => (
        <div style={styles.div}>
            <iframe title="navbar weather" style={styles.iframe} src="https://cdnres.willyweather.com/widget/loadView.html?id=101901" height="230" frameBorder="0" scrolling="no"></iframe>
            <a style={styles.a} href="https://www.willyweather.com/ca/orange-county/irvine.html" rel="nofollow">irvine Forecast</a>
        </div>
    

);

export default WeatherCard;