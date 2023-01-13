import React from 'react'
import printwebp from '../images/print.webp'

const errorPage = () => {
  return (
    <div>
      <h1>404 page not found</h1>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">


<img src={printwebp} className="img-fluid" alt="Sample images" />

</div>
    </div>
  )
}

export default errorPage
