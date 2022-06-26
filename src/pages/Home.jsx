import { React } from 'react'
import Showcase from '../components/Showcase'
import Deals from '../components/Deals'
import SearchBar from '../components/SearchBar'
import { useState, useEffect, useRef } from 'react'

// API
import { getGameDeals, getGamesByTitle } from '../api/getGameDeals'

const Home = () => {

    const [games, setGames] = useState([])
    const gameTitle = useRef()
    const [isDeals, setDeals] = useState(true)

    useEffect(() => {
        getDealsRequest()
    }, [])

    const getDealsRequest = async () => {
        const deals = await getGameDeals()
        setGames(deals)
        setDeals(true)
    }

    const getGamesByTitleRequest = async () => {
        const result = await getGamesByTitle(gameTitle.current.value)
        setGames(result.data)
        setDeals(false)
    }

    const handleSearch = () => {
        const title = gameTitle.current.value
        if(!title || title.length < 3) {
            getDealsRequest()
        } else {
            getGamesByTitleRequest()
        }
        gameTitle.current.value = ''
    }

    return (
        <>
            <Showcase />
            <section style={{ backgroundColor: '#eee' }}>
                <SearchBar setGameTitle={gameTitle} handleSearch={handleSearch} />
                <Deals games={games} isDeals={isDeals}/>
            </section>
        </>
    )
}

export default Home