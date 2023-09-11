
import Navbar from '../navbar/Navbar'

export default function Page() {
    return (
        <div className='hd'>

            <div className='container'>
                <Navbar />
                <h1 className='hdf'>Creative <br />
                    Digital Agency</h1>
                <h6 className='mar'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt.</h6>
                <button type="button" class="btn mar btn-primary">Learn more</button>

            </div>
        </div>
    )
}
