import axios from "axios";

const BASEURL = "https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=";
const APIKEY = "&api_key=0d61e71af41659695433b6e5f52702f73b11c6367c53caf3e2d3544ac13ff56c";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY)
    },
}