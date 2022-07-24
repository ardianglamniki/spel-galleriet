import { placements } from '@popperjs/core';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import RedirectButton from './RedirectButton';

// API
import { getDealDetail } from '../api/getGameDeals'


const Deal = ({ deal, isDeals }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top-start',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'eventListeners', options: { scroll: false } }
    ]
  });
  const [isOpen, setIsOpen] = useState(false)
  const [dealDetails, setDealDetails] = useState([])
  const [cheapestPrice, setCheapestPrice] = useState(null)


  const onButtonClick = async () => {
    setIsOpen(!isOpen)
    const response = await getDealDetail(deal.cheapestDealID)
    setDealDetails(response.data.gameInfo)
    setCheapestPrice(response.data.cheapestPrice.price)

  }


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
              ref={setReferenceElement}
              className='btn btn-success'
              onClick={onButtonClick}
            >
              Mer info
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default Deal
