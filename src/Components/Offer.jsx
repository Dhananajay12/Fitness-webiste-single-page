import React , {useEffect} from 'react'
import { Link } from 'react-scroll'
import Aos from 'aos'
import "aos/dist/aos.css";

const Offer = () => {


    useEffect(() => {
        Aos.init({duration:2000});
      }, []);

    return (
        <div id='offer'>
            <div className='background3'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='' data-aos="fade-up" >

                <center>
                    <p className='font-size-slider color2' style={{fontWeight:"bold"}}>A BIG <span className='text-white' > OFFER  </span> FOR  <br></br><span className="text-white"> THIS SUMMER  </span> </p>
                    <p className='text-white font-size-slider3'>Build Your Body And Fitness With Professional Touch</p>
                    <br></br>
                    <div className='wrap'>
                        <Link className='button' to="contact">JOIN US</Link>
                    </div>
                </center>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            </div>

        </div>
    )
}

export default Offer