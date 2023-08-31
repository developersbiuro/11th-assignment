import React from 'react'
import Header from '../src/component/header/Header'
import Footer from '../src/component/footer/Footer'

export default function page() {
  return (
    <div>
      <Header/>
      <ul className="nav justify-content-end  " style={{color:"white"}}>
                        <li className="nav-item  ">
                            <Link className="nav-link colr active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link ul active  " aria-current="page" href="about/">About</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link ul active  " aria-current="page" href="services/">Services</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link active  " aria-current="page" href="pages/">Pages</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link active  " aria-current="page" href="portfolio/">Portfolio</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link active  " aria-current="page" href="blogs/">Blogs</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link active  " aria-current="page" href="contact/">Contact us</Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-light" type="button" id="button-addon2"> </button>
                        </div>
                    </form>
      <Footer/>
    </div>
  )
}
