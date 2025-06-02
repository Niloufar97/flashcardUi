import loadingImg from '../../assets/images/penguin_loading.gif'

function Loading() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <img src={loadingImg} alt="" />
      <h2 className='text-center title1'>Loading...</h2>
    </div>
  )
}

export default Loading
