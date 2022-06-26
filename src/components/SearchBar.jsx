
const SearchBar = ({ handleSearch, setGameTitle }) => {

  return (
    <div className="container pt-4">
      <div className='d-md-flex align-items-center justify-content-between'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control w-25'
            placeholder='Speltitel'
            ref={setGameTitle}
          />
          <input
            className='btn btn-dark btn-lg'
            type='button'
            value='Sök'
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar