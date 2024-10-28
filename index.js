require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)
let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const getImage = async (query) => {
    try {
        endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
        const response = await fetch(endpoint)
        const data = await response.json()

        const gifNumber = getRandomNumber(0, 24)
        // console.log(gifNumber)
        // console.log(data.data[0].images.original)
        const gifUrl = data.data[gifNumber].images.original.url

        console.log(gifUrl);

        return gifUrl; 
    } catch (error) {
        console.error('Error:', error)
    }
}

getImage("cats")
