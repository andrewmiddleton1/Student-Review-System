import React from "react";
import hunternewengland from "../assets/images/hunternewengland.jpg"


const LandingJumbo = (props) => {

    return (
        <div className="jumbotron mt-5 landingJumbo">
            <div className='col-sm-8 mx-auto jumboText'>
                <h1 className='d-flex justify-content-center companyName'>
                    <div>
                        <img src={hunternewengland} alt="hunternewenglandlogo" />
                    </div>

                </h1>
                <h2 className='text-center companySlogan'>Registrar Feedback Portal</h2>
            </div>
        </div>
    );

}

export default LandingJumbo;