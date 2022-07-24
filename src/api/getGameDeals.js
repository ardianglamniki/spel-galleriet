import axios from 'axios'

let baseURL = 'https://www.cheapshark.com/api/1.0'
export const fetchData = async (url) => {
    try {
        const response = await axios.get(url)
        return response
    }
    catch (error) {
        return error
    }
}

const getGameDeals = async () => {
    const response = await fetchData(baseURL + '/deals')
    const uniqueDeals = [... new Map(response.data.map(deal => [deal['title'], deal])).values()]
    return uniqueDeals
}

const getGameDetailHistory = async (gameId) => {
    return fetchData(baseURL + `/games?id=${gameId}`)
}

const getGamesByTitle = async (title) => {
    return fetchData(baseURL + `/games?title=${title}`)
}

const getDealDetail = async (dealId) => {
    return fetchData(baseURL + `/deals?id=${dealId}`)
}

export {
    getGameDeals,
    getGameDetailHistory,
    getGamesByTitle,
    getDealDetail
}



