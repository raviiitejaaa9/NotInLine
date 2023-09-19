import "./index.css"

const SixthComponent = () => {

    return (
        <div className = "sixth-component" >
            <div className = "sixth-one">
                <img alt = "logo" className = "sixth-logo" 
                    src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695137579/NIL_logo_Transparent_1_1_zx9rc8.png"
                />
                <p> 
                Book doctor appointments online and get your ailments 
                treated in no time with our expert medical support systems. 
                Get rid of all your medical problem with our expert 
                panel of doctors who guide you towards a healthier life.
                </p>
                <div className = "sixth-input-container" >
                    <h4 className = "number-prefix" > +91 </h4>
                    <input type = "input" className = "sixth-input-el" />
                    <div className = "sixth-suffix" >  
                        <img className = "call-icon" alt = "call-icon"
                            src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695149033/call_u5sjpn.png"
                        />
                    </div>
                </div>
            </div>
            <div className = "sixth-two" >
                <ul className = "sixth-ul" >
                    <h1 className = "ul-head"> Services </h1>
                    <li className = "li-el"> Appointments </li>
                    <li className = "li-el"> Lab Tests </li>
                    <li className = "li-el"> A-Z Support </li>
                    <li className = "li-el"> Doctor Support </li>
                </ul>

                <ul className = "sixth-ul" >
                    <h1 className = "ul-head"> Legal </h1>
                    <li className = "li-el"> General info </li>
                    <li className = "li-el"> Privacy policy </li>
                    <li className = "li-el"> Terms of services </li>
                    <li className = "li-el"> Consultation </li>
                    <li className = "li-el"> How it works  </li>
                </ul>

                <ul className = "sixth-ul" >
                    <h1 className = "ul-head"> Talk to us </h1>
                    <li className = "li-el"> support@notinline.com </li>
                    <li className = "li-el"> appointment@notinline.com </li>
                    <li className = "li-el"> +91 12345 67899 </li>
                    <li className = "li-el"> +91 97642 09752 </li>
                </ul>
                
            </div>
            <hr className = "sixth-hr-el" />
            <div className = "sixth-three" >
                <img className = "copy-right" alt = "copy-right-logo"
                    src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695149426/Component_4_faph6j.png"
                /> 
                <p className = "six-three-para" > 2021-2023 All Rights Reserved </p>
            </div>
        </div>
    )
}

export default SixthComponent