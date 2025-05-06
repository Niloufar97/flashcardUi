import { Link } from 'react-router-dom'
import notFoundImage from '../../assets/images/penguin_not-found.gif'
import './not-found.css'

function NotFound() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 gap-3'>
      <img src={notFoundImage}></img>
      <h1 className='title1'>404</h1>
      <h2 className='title1'>Sorry, We couldn’t find what you’re looking for.</h2>
      <Link to="/" className='btn-secondary-outline-orange btn btn-lg px-5'>Back to Home</Link>
    </div>
  )
}

export default NotFound
