import Link from 'next/link'
import Header from '../src/component/header/Header'
import Footer from '../src/component/footer/Footer'
import ServiceCard from '../src/component/servicecard/ServiceCard'
import webimg from "../src/assets/images/pngwing.com (4).png"
import desimg from "../src/assets/images/pngwing.com (3).png"
import marimg from "../src/assets/images/pngwing.com (7).png"



export default function page() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>

          <ServiceCard src={webimg} dg="jhdfjkfhjk" title="Web Development" />
          <ServiceCard src={desimg} dg="jhdfjkfhjk" title="Graphic Design" />
          <ServiceCard src={marimg} dg="jhdfjkfhjk" title="Digital Marketing" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
