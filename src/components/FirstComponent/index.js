import "./index.css"

const FirstComponent = () => {

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log("submit triggered")
    }

    return(
        <div className = "first-component" >
            <img alt = "mobile-pic" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695134429/FC1-mobile_z6ummi.png" className = "fc-mobile-img" />
            <div className = "fc-discount" > <p className = "fc-span" > Get a Full Body Checkup Now at </p>  </div>
            <div className = "fc-disc" > <p className = "text-underline fc-span"  > 5999 </p> <p className = "fc-span" > 999 </p> <p className = "fc-span" > 70% OFF </p>  </div>
            <div>
                <form className = "form" onSubmit = {onSubmitForm} >
                    <div className = "input-container">
                        <label htmlFor = "full name" className = "label-el" > 
                            <img alt = "profile-icon" className = "form-icons" 
                            src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695150052/person_imi6fi.png"
                            />  
                        </label>
                        <input className = "input-el" type = "input" placeholder = " Full Name" id = "full name" />
                    </div>
                    <div className = "input-container">
                        <label htmlFor = "number" className = "label-el" > 
                            <img alt = "call-icon" className = "form-icons" 
                                src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695150043/call_1_dl4lo9.png"
                            />  
                        </label>
                        <input className = "input-el" type = "input" placeholder = " Phone Number" id = "number" />
                    </div>
                    <div className = "input-container">
                        <label htmlFor = "location" className = "label-el" > 
                            <img alt = "location-icon" className = "form-icons" 
                                src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695150042/distance_gdqtdp.png"
                            />  
                        </label>
                        <input className = "input-el" type = "input" placeholder = " Location " id = "location" />
                    </div>
                    <div className = "check-box-input-container ">
                        <input className = "checkbox-el" id = "check-box"  type = "checkbox" />
                        <label className = "label-el"  htmlFor = "check-box" > <p className = "checkbox-para"> By selecting this you agree to our terms & conditions </p>  </label>
                    </div>

                    <button className = "btn btn-primary proceed-btn" > Proceed </button>
                </form>
                <div className = "fc-para-container" >
                    <div className = "first-component-para">
                        <p > Get a Full Body Checkup Now at <span className = "text-underline" > 5999 </span> 999 </p>
                    </div>
                    <p className = "seventy" > 70% OFF </p>
                </div>
            </div>


            <img className = "first-component-img" alt = "hero-pic" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695129695/notInLine_FirstComponent_image_v259p6.png" />

        </div>
    )
}


export default FirstComponent