let IS_PROD = true;
const server = IS_PROD?
    "https://meetly-backend-gd5v.onrender.com" : 
    "http://localhost:1856";

export default server;