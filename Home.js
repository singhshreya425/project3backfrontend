import React from 'react'
import homeimg from '../images/pic.jpg'

const Home = () => {
  return (
    <div>
      <h1>Shreya Singh</h1>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">


<img src={homeimg} className="img-fluid" alt="Sample images" />

</div>
    </div>
  )
}

export default Home
