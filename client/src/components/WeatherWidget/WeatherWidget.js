import React from "react";


const styles = {
    div: {
        width: "210px",
    },
    iframe: {
        display: "block",
        // width: "282",
        // height: "69",
        // frameborder: "0",
    },
    a: {
        textIndent: "-9999em",
        display: "block",
        margin: "-20px 0 0 0",
        height: "20px",
        zIndex: "1",
        position: "relative",
    }
}

const WeatherWidget = () => (

    <div style={styles.div}>
        <iframe title="widget weather" style={styles.iframe} src="https://cdnres.willyweather.com/widget/loadView.html?id=101874" width="210" height="62" frameBorder="0" scrolling="no"></iframe>
        <a style={styles.a} href="https://www.willyweather.com/ca/orange-county/irvine.html" rel="nofollow">-</a>
    </div>

);

export default WeatherWidget;