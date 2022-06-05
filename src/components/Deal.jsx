import { Link } from 'react-router-dom'

const Deal = ({deal}) => {
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
        <Link
          to='/deal-detail'
          className='btn btn-success'
          onClick={() => {
          }}
        >
          Läs mer om erbjudandet
        </Link>
      </div>
    </div>
  )
}

export default Deal
