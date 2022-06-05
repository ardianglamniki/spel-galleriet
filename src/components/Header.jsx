import { Link as Link1 } from 'react-router-dom'
import { Link as Link2} from 'react-scroll'


const Header = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-warning text-dark fs-5'>  
                <div className='container-fluid mx-3 py-1'>
                    <Link1 to='/' className='navbar-brand fs-4'>
                        SpelGalleriet
                    </Link1>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#nav-menu'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Sök efter ett spel" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Sök</button>
                    </form>
                    <div className='collapse navbar-collapse' id='nav-menu'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <Link2 to='deals' className='nav-link'>
                                    <Link1 to='/'>
                                    Erbjudanden
                                    </Link1>
                                </Link2>
                            </li>
                            <li className='nav-item'>
                                <Link1 to='/watchlist' className='nav-link'>
                                    Bevakningslista
                                </Link1>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header