import { Link } from 'react-router';
import LogoImg from '../../assets/images/logo-removebg-sm.png'
import './home.css'
function Home() {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3 home-container'>
                <div className='logo-container'>
                    <img src={LogoImg} alt="logo-cardCrafter" />
                </div>
                <h1 className='title1'>Welcome to CardCrafter</h1>
                <div className='d-flex gap-4 flex-column btns' >
                    <Link to='/library' className="btn btn-primary-blue btn-lg w-100">
                        Go to Library
                    </Link>
                    <Link to='/generate-card' className="btn btn-secondary-outline-orange btn-lg ">
                        Create New Set
                    </Link>

                </div>
            </div>
        </>

    )
}
export default Home;