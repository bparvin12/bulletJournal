import axios from "axios";

// const WEATHERURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
// const APIKEY = "&APPID=b2d09f99e300b9dfe72cbcbc96003853";


// // exporting an object containing methods we will use
// //for accessing the weather api 
// export default {
//     search: function(query) {
//         //here we would sub out the 92705,us for a input, and add query inbetween the 
//         //weather url and api
//         return axios.get(WEATHERURL + query + APIKEY)
//     }
// };

const WEATHERWIDGETURL = "https://forecast7.com/en/33d68n117d83";
const usa = "?unit=us"

export default {
    search: function(query) {
        return axios.get(WEATHERWIDGETURL + query + usa);
    }
}