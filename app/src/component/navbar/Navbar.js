
import Link from "next/link"
import "../../../globals.css"
import sr from "../../assets/images/search.png"
import Image from "next/image"

export default function Navbar(props) {
    return (
        <div className="ul ">
            <nav className="navbar ">
                <div className="container-fluid ul">
                    <Link className="navbar-brand" href="/"><b className="colr">Developers-Biuro</b></Link>
                    <div className="colr ul" data-bs-theme="dark">
                        <ul className="nav justify-content-" >
                            <li className="nav-item  ">
                                <Link className="nav-link ul active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link ul active  " aria-current="page" href="about/">About</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link ul active  " aria-current="page" href="services/">Services</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link ul active  " aria-current="page" href="pages/">Pages</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link ul active  " aria-current="page" href="portfolio/">Portfolio</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link ul active  " aria-current="page" href="blogs/">Blogs</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link ul active  " aria-current="page" href="contact/">Contact us</Link>
                            </li>

                        </ul>
                    </div>
                    <form className="d-flex" role="search">

                        <div className="input-group col-sm-3">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username"  />
                            
                            <button className="btn btn-outline-light" type="button" id="button-addon2">  </button>
                        </div>
                    </form>
                </div>
            </nav>


        </div>
    )
}
