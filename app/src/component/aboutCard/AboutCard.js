import Image from 'next/image'
import { Props } from 'next/script'


export default function AboutCard() {
  return (
    <div className='col-lg-4 col-sm-10'>
            <div className="card wcd" >
                <Image  className="card-img-top"  ></Image>
                <div className="card-body wbd">
                    <h3></h3>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
  )
}
