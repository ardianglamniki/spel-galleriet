import React from 'react'
import Deal from './Deal'


const Deals = ({ gameDeals }) => {

    console.log(gameDeals)
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <div className='container' id='deals'>
                <div className='py-4 text-center'>
                    <h2>
                        Nuvarande erbjudanden
                    </h2>
                </div>
                <div className="row">
                    {gameDeals.map((deal) => (
                        <div
                            key={deal.dealID}
                            className={gameDeals.length > 1 ? 'col-lg-4 col-md-6' : 'col'}
                        >
                            <Deal
                                deal={deal}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Deals