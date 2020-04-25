/* eslint-disable no-undef */
require('dotenv').config();

let BaseURL;

if (process.env.NODE_ENV === "development") {
    BaseURL = process.env.REACT_APP_LOCAL_HOST;
} else if (process.env.NODE_ENV === "production"){
    BaseURL = process.env.REACT_APP_API_URL;
}

export default BaseURL;