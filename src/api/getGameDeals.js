import axios from 'axios'

export const getGameDeals = async () => {
    const API_URL = 'https://www.cheapshark.com/api/1.0/deals'
    const response = await axios.get(API_URL)

    const uniqueDeals = [... new Map(response.data.map(deal => [deal['title'], deal])).values()]

    return uniqueDeals
}

export const getGameDetailHistory = async (gameId) => {
    const API_URL = `https://www.cheapshark.com/api/1.0/games?id=${gameId}`

    const response = await axios.get(API_URL)
    console.log(response)

    return response
}



