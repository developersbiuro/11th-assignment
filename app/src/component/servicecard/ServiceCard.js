import Image from 'next/image'



export default function ServiceCard(props) {
    return (
        <div className='col-lg-4 col-sm-10 '>
            <div className="card acd" >
                <Image src={props.src} className="card-img-top bacimg"  ></Image>
                <div className="card-body wbd">
                    <h3>{props.title}</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmodtempor
                        incididunt ut labore et dolore
                    </p>
                </div>
            </div>
        </div>
    )
}
