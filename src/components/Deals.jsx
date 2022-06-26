import Deal from './Deal'

const Deals = ({ games, isDeals }) => {

    console.log(games)
    return (
        
            <div className='container' id='deals'>
                <div className='py-3 text-center'>
                    <h2>
                        {isDeals ? 'Nuvarande erbjudanden' : games.length + ' resultat hittades'}
                    </h2>
                </div>
                <div className="row">
                    {games.map((deal) => (
                        <div
                            key={deal.gameID}
                            className={games.length > 1 ? 'col-lg-4 col-md-6' : 'col'}
                        >
                            <Deal
                                deal={deal}
                                isDeals={isDeals}
                            />
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Deals