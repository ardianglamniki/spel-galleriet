const Deal = ({ deal, isDeals }) => {

  return (
    <div className='card mb-2 mx-2'>
      <img
        src={deal.thumb}
        alt={deal.internalName}
        className='card-img-top'
      />
      <div className='card-body'>
        {isDeals ?
          <>
            <h5 className='card-title'>{deal.title}</h5>
            <p>
              <s>
                {deal.normalPrice}$
              </s>
              <br />
              {deal.salePrice}$
            </p>
            <button
              className='btn btn-success'
              onClick={() => window.open(`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`)}
            >
              Läs mer om erbjudandet
            </button>
          </>
          :
          <>
            <h5 className='card-title'>{deal.external}</h5>
              <pre>
              Nuvarande billigaste pris: {deal.cheapest}$
              </pre>
            <button
              className='btn btn-success'
              onClick={() => window.open(`https://www.cheapshark.com/redirect?dealID=${deal.cheapestDealID}`)}
            >
              Läs mer om spelet & försäljaren
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default Deal
