import {React } from 'react'
import Showcase from '../components/Showcase'
import Deals from '../components/Deals'


const Home = ({ gameDeals }) => {
    
    return (
        <>
            <Showcase />
            <Deals gameDeals={gameDeals} />
        </>
    )
}

export default Home