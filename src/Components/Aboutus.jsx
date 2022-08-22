import React from 'react'
import aboutus from './Images/aboutus.jpg'
const Aboutus = () => {
  return (
    <div id='aboutus'>
      <div className='container-fluid color-for-container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='row '>
          <br></br>
          <div className='col-md-6'>
            <center>

              <img src={aboutus} alt="anoutus" className='img-fluid image-size-about img-load zoom ' />
            </center>
          </div>
          <div className='col-md-6 text-white'>
            <p className=" font-size-slider2 mt-4"> LEARN MORE ABOUT <span className='text-white'>US</span></p>
    
            <p className="gap h5">Leorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Donec in leo tempus urna viverra volutpat. Proin odio tellus,<br></br>
              eleifend nec urna at, malesuada pellentesque odio. Proin <br></br>
              scelerisque velit et nisl iaculis, vitae sagittis felis <br></br>
              vestibulum. Morbi metus magna, vehicula quis enim ac,<br></br>
              auctor malesuada erat. Maecenas tempor, felis non interdum<br></br>
              Nulla eu semper diam, congue consectetur ipsum.</p><br></br>
              <button className='button-cover simple-button zoom'>Know More</button>

          </div>
          
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Aboutus