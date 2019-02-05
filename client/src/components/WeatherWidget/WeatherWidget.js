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
        position: "relative"
    }
}

const WeatherWidget = () => (
  

            // <a class="weatherwidget-io" href="https://forecast7.com/en/33d68n117d83/irvine/?unit=us" data-label_1="IRVINE" data-label_2="WEATHER" data-theme="original" >IRVINE WEATHER</a>
            // <a class="weatherwidget-io" href="https://forecast7.com/en/33d68n117d83/irvine/?unit=us" data-label_1="IRVINE" data-label_2="WEATHER" data-font="Roboto Slab" data-mode="Current" data-days="3" data-theme="original" >IRVINE WEATHER</a>

            <div style={styles.div}>
                <iframe style={styles.iframe} src="https://cdnres.willyweather.com/widget/loadView.html?id=101874" width="210" height="62" frameborder="0" scrolling="no"></iframe>
                <a style={styles.a} href="https://www.willyweather.com/ca/orange-county/irvine.html" rel="nofollow"></a>
            </div>

            

            // <iframe src="https://www.meteoblue.com/en/weather/widget/three/irvine_united-states-of-america_5359777?geoloc=fixed&nocurrent=0&noforecast=0&noforecast=1&days=4&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&layout=image"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 460px;height: 221px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/irvine_united-states-of-america_5359777?utm_source=weather_widget&utm_medium=linkus&utm_content=three&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>
        



);

export default WeatherWidget;