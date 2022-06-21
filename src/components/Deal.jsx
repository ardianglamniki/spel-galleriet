const Deal = ({ deal }) => {

  return (
    <div className='card mb-2 mx-2'>
      <img
        src={deal.thumb}
        alt={deal.title}
        className='card-img-top'
      />
      <div className='card-body'>
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
      </div>
    </div>
  )
}

export default Deal
