import React from 'react'
import booksimg from '../images/print.webp'

const Books = () => {
  return (
    <div>
      <h1>books</h1>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">


<img src={booksimg} className="img-fluid" alt="Sample images" />

</div>
    </div>
  )
}

export default Books
