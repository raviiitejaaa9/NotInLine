import "./index.css"

const FifthComponent = () => {

    return (
        <div className = "fifth-component">
             <h1 className = "fifth-c-head"> Why <span className = "fourth-c-span"> Choose </span> us? </h1>
            <h3 className = "fourth-c-para"> 
                We want you and your heart to be healthy
                so you can live a happy life!
            </h3>
            <div className = "fifth-sec2-container" >
                <div className = "fifth-cards-container" >
                    <div className = "fifth-card" >
                         <div className = "fifth-card-img-container" >
                            <h3 > NABL Accredited Labs </h3>
                            <img className = "fifth-card-img" alt = "fifth-card-logo"
                                src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695144197/Ellipse_16_dfvuzl.png"
                            /> 
                         </div>
                         <p> Get accurate and safe results from our NABL-certified lab partners. </p>
                    </div>

                    <div className = "fifth-card" >
                         <div className = "fifth-card-img-container" >
                            <h3 > Value Experience</h3>
                            <img className = "fifth-card-img" alt = "fifth-card-logo"
                                src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695144196/Ellipse_14_tlmchj.png"
                            /> 
                         </div>
                         <p> 
                            Experience seamless care without the hassle 
                            of waiting in long lines for an appointment. 
                            Book with us for a healthier lifestyle. 
                        </p>
                    </div>

                    <div className = "fifth-card" >
                         <div className = "fifth-card-img-container" >
                            <h3 > Timely Collections </h3>
                            <img className = "fifth-card-img" alt = "fifth-card-logo"
                                src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695144195/Ellipse_13_fxh8e9.png"
                            /> 
                         </div>
                         <p>
                            We collect samples timely to prevent 
                            treatment delays and ensure your continued well-being.
                        </p>
                    </div>

                    <div className = "fifth-card" >
                         <div className = "fifth-card-img-container" >
                            <h3 > Transparency</h3>
                            <img className = "fifth-card-img" alt = "fifth-card-logo"
                                src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695144195/Ellipse_15_k6hexi.png"
                            /> 
                         </div>
                         <p> 
                            Enjoy hassle free medical assistance with our transparent approach. 
                            We prioritize transparency for your smooth medical journey.
                         </p>
                    </div>
                </div>
                <img alt = "doctor-pic" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695144640/expressive-young-woman-posing-studio-removebg-preview-transformed_1_myub3t.png" className = "doctor-pic" />
            </div>
        </div>   
    )
}


export default FifthComponent