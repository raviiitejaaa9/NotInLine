
import "./index.css"

const SecondComponent = () => {
    return (
        <div className = "second-component" >
            <div className = "sc-img-container" >
                <img alt = "sc-pic" className = "sc-img" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695135689/nabl_svfkmw.png" />
                <h2 className = "sc-head" > NABl Accredited Labs </h2>
            </div>

            <div className = "sc-img-container" >
                <img alt = "sc-pic" className = "sc-img" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695135688/free_sample_odia2n.png" />
                <h2 className = "sc-head" > Free Sample Collection </h2>
            </div>
        </div>
    )
}

export default SecondComponent