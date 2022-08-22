import React from 'react'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'


const Contact = () => {
    return (
        <div id='contact'>
            <div className='container-fluid color-for-container2'>
                <br></br>
                <br></br>
                <center>   <h1 className="text-white  font-size-slider2">CONTACT <span className='font-size-slider2'>  US  </span></h1> </center>
                <div className='container '>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='row '>
                        <div className='col-md-6 text-white h5'>
                  
                        
                            <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill> 9137319282 <br></br>
                            <br></br>
                            <AiOutlineMail></AiOutlineMail> Dhananjayavare786@gmail.com<br></br><br></br>
                            <HiLocationMarker></HiLocationMarker> Satyam apt.,Nadivali,Haji malang road,Kalyan east, Thane<br></br><br></br>
                            <a href="/"><i className="fa fa-instagram fa-3x zoom text-white" style={{ marginTop: "1.2rem", marginBottom: "1.2rem", paddingRight: "1.5rem" }}></i></a>
                            <a href="/"><i className="fa fa-twitter-square fa-3x zoom   text-white" style={{ paddingRight: "1.5rem", paddingLeft: "1rem" }}></i></a>
                            <a href="/"><i className="fa fa-facebook-square fa-3x zoom   text-white" style={{ paddingRight: "1.5rem", paddingLeft: "1rem" }}></i></a>
                            <a href="/"><i className="fa fa-skype fa-3x zoom   text-white" style={{ paddingRight: "1.5rem", paddingLeft: "1.5rem" }}></i></a>
                        </div>


                        <div className='col-md-6 text-white'>

                            <form>
                                <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem" }}>
                                        <p className="mt-3 mb-2 text-white h5" >FULLNAME:</p>
                                        <input
                                            type="text"
                                            name="user_name"
                                            id=""
                                            className="form-control"

                                        />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem" }}>
                                        <p className="mt-3 mb-2 h5" >PHONE NO:</p>
                                        <input
                                            type="text"
                                            name="user_phone"
                                            id=""
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem" }}>
                                        <p className="mt-3 mb-2 h5" >EMAIL:</p>
                                        <input
                                            type="text"
                                            name="user_email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem" }}>
                                        <p className="mt-3 mb-2 h5" >SUBJECT:</p>
                                        <input
                                            type="text"
                                            name="sub"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12  contact-input-feild " style={{ marginTop: "-2rem" }}>
                                        <p  className="h5" style={{ marginBottom: "5px" }}>MASSAGE:</p>

                                        <textarea className='text_field contact_form_message card-6 ' id='' type="text" name="message" cols="30" rows="4" ></textarea>
                                    </div>
                                </div>
                                <div className="form-check form-checkbox-style " style={{ marginTop: "-1rem" }}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        style={{ fontSize: "20px" }}
                                    />
                                    <label
                                        className=" form-check-label main-hero-para h5"  >
                                        I agree that the  FitnessClub  may contact me at the email address or phone number above
                                    </label>
                                </div>

                                <button
                                    style={{ fontSize: "18px" ,marginTop:"-1rem" , border:"none" }}
                                    type="submit"
                                    value="Send"
                                    className=" w-100 mb-5 rounded simple-button ">
                                    Submit
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
                <br></br>
                <br></br>
              



            </div>




        </div>
    )
}

export default Contact