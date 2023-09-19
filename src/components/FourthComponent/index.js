import "./index.css"

const FourthComponent = () => {

    return (
        <div className = "fourth-component" >
            <h1 className = "fourth-c-head"> Top <span className = "fourth-c-span"> Packages </span> </h1>
            <h3 className = "fourth-c-para"> 
                Explore our wide range of tests! 
                We ensure that you don’t miss out on 
                any chance to keep yourself healthy. 
            </h3>
            <div className = "fourth-cards-container" >
                <div className = "fourth-card" >
                    <h1> Basic Full Body Checkup </h1>
                    <div className = "card-star-container" > 
                        <p className = "fourth-card-para" > 4.3 </p>
                        <img  alt = "star" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695142296/grade_b9ivb5.png" className = "star-img" />
                        <p className = "fourth-card-para" >  (75 Reviews) </p>
                    </div>
                    <h4> Number of Tests - 53 </h4>
                    <p> MRP: <span className = "fourth-card-span"> 10,000 </span> 8,490 </p>
                    <button className = "btn btn-primary fourth-btn " > Book Now  </button>
                </div>

                <div className = "fourth-card" >
                    <h1> Advanced Full Body Checkup </h1>
                    <div className = "card-star-container" > 
                        <p className = "fourth-card-para" > 4.7 </p>
                        <img  alt = "star" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695142296/grade_b9ivb5.png" className = "star-img" />
                        <p className = "fourth-card-para" >  (100 Reviews) </p>
                    </div>
                    <h4> Number of Tests - 70 </h4>
                    <p> MRP: <span className = "fourth-card-span"> 12,000 </span> 10,000 </p>
                    <button className = "btn btn-primary fourth-btn " > Book Now  </button>
                </div>

                <div className = "fourth-card" >
                    <h1> Liver Function Test (LFT) </h1>
                    <div className = "card-star-container" > 
                        <p className = "fourth-card-para" > 4.3 </p>
                        <img  alt = "star" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695142296/grade_b9ivb5.png" className = "star-img" />
                        <p className = "fourth-card-para" >  (43 Reviews) </p>
                    </div>
                    <h4> Number of Tests - 89 </h4>
                    <p> MRP: <span className = "fourth-card-span"> 13,299 </span> 11,299 </p>
                    <button className = "btn btn-primary fourth-btn " > Book Now  </button>
                </div>
            </div>
        </div>
    )
}

export default FourthComponent