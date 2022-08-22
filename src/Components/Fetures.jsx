import React from 'react'

import { BiDumbbell } from 'react-icons/bi'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { GiMuscleUp } from 'react-icons/gi'
import { GiGymBag } from 'react-icons/gi'
const Fetures = () => {
    return (
        <div id='features'>
            <div className='container-fluid color-for-container'>
                <br></br>
                <br></br>
         
                <center>       <p className='text-white font-size-slider2 '>FEATURES OF OUR GYM</p></center>
                <br></br>
   
                <div className='row mt-5'>


                    <div className='col-md-3 zoom3 padding-for-col'>

                        <center>  <BiDumbbell className='size-icon'></BiDumbbell>
                            <br></br>

                        </center>
                        <center>
                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>


                        </center>
                    </div>
                    <div className='col-md-3 zoom3 padding-for-col'>
                        <center>

                            <GiWeightLiftingUp className='size-icon'></GiWeightLiftingUp>

                        </center>
                        <center>

                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                        </center>
                    </div>

                    <div className='col-md-3 zoom3 padding-for-col'>
                        <center>

                            <GiMuscleUp className='size-icon'></GiMuscleUp>

                        </center>
                        <center>
                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                        </center>
                    </div>
                    <div className='col-md-3 zoom3 padding-for-col'>
                        <center>

                            <GiGymBag className='size-icon'></GiGymBag>

                        </center>
                        <center>
                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
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

export default Fetures