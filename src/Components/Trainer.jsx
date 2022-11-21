import React from 'react'
import image from './Images/trainer.jpg'
import image1 from './Images/trainer2.jpg'
import image2 from './Images/trainer3.jpg'
import image3 from './Images/trainer4.jpg'
const Trainer = () => {
  return (
    <div id='trainer'>
    <div className='container-fluid color-for-container2'>
        <br></br>
        <br></br>
 
        <center>       <p className='text-white font-size-slider2 '>TRAINERS OF OUR GYM</p></center>
        <br></br>

        <div className='row mt-5'>


            <div className='col-md-3 zoom3 padding-for-col'>

                <center>  
               
                 <img src={image} alt='trainer' className='img-fluid rounded2'/> 
                </center>
                <center>
                    <br></br>
                    <br></br>
                    <h2 className="text-white">Jhon Smith</h2>
                    <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>


                </center>
            </div>
            <div className='col-md-3 zoom3 padding-for-col'>
                <center>
                <img src={image1} alt='trainer' className='img-fluid rounded2'/> 
                  

                </center>
                <center>

                    <br></br>
                    <br></br>
                    <h2 className="text-white">Jonny cowerd</h2>
                    <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                </center>
            </div>

            <div className='col-md-3 zoom3 padding-for-col'>
                <center>

                <img src={image2} alt='trainer' className='img-fluid rounded2'/> 

                </center>
                <center>
                    <br></br>
                    <br></br>
                    <h2 className="text-white">keny Lane</h2>
                    <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                </center>
            </div>
            <div className='col-md-3 zoom3 padding-for-col'>
                <center>

                <img src={image3} alt='trainer' className='img-fluid rounded2'/> 

                </center>
                <center>
                    <br></br>
                    <br></br>
                    <h2 className="text-white">Tommy jeer</h2>
                    <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                </center>
            </div>
        

        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>


    </div>


</div>
  )
}

export default Trainer