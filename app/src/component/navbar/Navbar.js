
import Link from "next/link"
import "../../../globals.css"
import sr from "../../assets/images/search.png"

export default function Navbar(props) {
    return (
        <div className="ul">
            <nav className="navbar ul">
                <div className="container-fluid ul">
                    <Link className="navbar-brand" href="/"><b>Developers-Biuro</b></Link>
                    <ul className="nav justify-content-end  " style={{color:"white"}}>
                        <li className="nav-item  ">
                            <Link className="nav-link ul active  " aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link active  " aria-current="page" href="about/">About</Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link active  " aria-current="page" href="services/">Services</Link>
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
                </div>
            </nav>


        </div>
    )
}
