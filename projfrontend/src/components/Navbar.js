import './css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'><Link to="/"><b className='item'>HealthCare</b></Link></div>
            <div className='navbar__item'><Link to="/admin/dashboard"><b className='item'>Admin</b></Link></div>
            <div className='navbar__item'><Link to="/SignIn"><b className='item'>Signin</b></Link></div>
            <div className='navbar__item'><Link to="/SignUp"><b className='item'>Signup</b></Link></div>
            <div className='navbar__item'><Link to="/Help"><b className='item'>Help</b></Link></div>
        </header>
    )
}

export default Navbar
