import { Link as Link1 } from 'react-router-dom'
import { Link as Link2 } from 'react-scroll'


const Header = ({ title }) => {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark fs-5' style={{ background: '#5587a4' }}>
                <div className='container-fluid mx-3 py-1'>
                    <Link1 to='/' className='navbar-brand fs-4'>
                        {title}
                    </Link1>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#nav-menu'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='nav-menu'>
                        <ul className='navbar-nav ms-auto'>
                            <li
                                className='nav-item'>
                                <Link2 id='link' to='deals' className='nav-link'>
                                    Erbjudanden
                                </Link2>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header