import Link from "next/link"


export default function Footer() {
    return (
        <div className='container-fluid ft mar'>
            <div className='container mar'>
                <div className='row ftmar'>
                    <div className='col-lg-4'> <h1><b className='logo '>Developers-Biuro</b></h1> <h6 className="mar ftmar">Lorem ipsum dolor sit amet, consectetur adipiscing
                        sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ea commodo consequat.</h6>

                    </div>
                    <div className='col-lg-2'><h2><b>Our Links</b></h2>


                        <Link className="nav-link ul active  " aria-current="page" href="/">Home</Link>
                        <br />
                        About Us<br /><br />
                        Services<br /><br />
                        Team<br /><br />
                        Blogs<br /><br />

                    </div>
                    <div className='col-lg-3'>
                        <h2><b>Our Company</b></h2>
                        About Company<br /><br />
                        Our Testimonial<br /><br />
                        Latest News<br /><br />
                        Our Mission<br /><br />
                        Get a Free Qout<br /><br />
                    </div>
                    <div className='col-lg-3'>
                    <h2><b>Our services</b></h2>
                        Web Development<br /><br />
                        App Development<br /><br />
                        Graphic Design<br /><br />
                        Web Solution<br /><br />
                        App Design<br /><br />
                    </div>
                </div>

            </div>
        </div>
    )
}
