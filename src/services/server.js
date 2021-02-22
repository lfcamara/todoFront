import axios from 'axios'

const url = 'http://localhost:3333/'
 
export default axios.create({
    baseURL: url,
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
})