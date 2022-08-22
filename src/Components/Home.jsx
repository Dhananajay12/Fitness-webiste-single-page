import React from 'react'


const Home = () => {
    return (
        <div id='home'>
            <div className='background4  imagesize'>
                <br></br>
                <center>
                    <div className="typewriter margintop">
                        <p className=" font-size-slider2 top-margin">STEP UP <span className='text-white'> YOUR </span> </p>
                    </div>
                    <p className='text-white font-size-slider' ><span style={{ color: "rgb(197, 16, 46)" }}>  FITNESS </span>WITH US</p>
                    <div className="typewriter ">
                    <p className='text-white font-size-slider3'>Build Your Body And Fitness With Professional Touch</p>
                    </div>
                   <br></br>
                   <div className='wrap'>
                    <button className='button'>JOIN US</button>
                   </div>
                </center>
            </div>
        </div>
    )
}

export default Home