import axios from 'axios'



export default async function createQuote () {
    const response = await axios('https://api.goprogram.ai/inspiration')
    console.log(response)
    return response 
}