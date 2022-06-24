import { React } from 'react'
import Showcase from '../components/Showcase'
import Deals from '../components/Deals'
import SearchBar from '../components/SearchBar'
import { useState, useEffect, useRef } from 'react'

// API
import { getGameDeals } from '../api/getGameDeals'

const Home = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        getDealsRequest()
    }, [])

    const getDealsRequest = async () => {
        const deals = await getGameDeals()
        setGames(deals)
    }

    return (
        <>
            <Showcase />
            <section style={{ backgroundColor: '#eee' }}>
                <div className='pt-3 text-center'>
                    <h2>
                        Nuvarande erbjudanden
                    </h2>
                </div>
                <SearchBar />
                <Deals games={games} />
            </section>
        </>
    )
}

export default Home