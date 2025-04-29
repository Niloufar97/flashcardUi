import LogoImg from '../../assets/images/logosm.jpg'
import './home.css'
function Home() {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3 home-container'>
                <div className='logo-container'>
                    <img src={LogoImg} alt="logo-cardCrafter" />
                </div>
                <h1>Welcome to CardCrafter</h1>
                <div className='d-flex gap-3 flex-column btns' >
                    <button className="btn btn-primary" type="button">Go to Library</button>
                    <button className="btn btn-outline-primary" type="button">Create New Set</button>
                </div>
            </div>
        </>

    )
}
export default Home;