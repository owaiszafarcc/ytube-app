import axios from "axios";

const KEY = 'AIzaSyB0_E8o6QMTA7ik5avilcbitCYxaYs4r08';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});


