import "./index.css"

const ThirdComponent = () => {

    return (
        <div className = "third-component" >
            <img className = "tc-img" alt = "tc-pic" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695137576/We_keep_expanding_quf92u.png" />
            <div className = "tc-wrap-container" >
                <div className = "wrap-component" >
                    <h3> 5+ </h3>
                    <p> Labs </p>
                </div>
                <div className = "wrap-component" >
                    <h3> 100+ </h3>
                    <p> Collections Centers </p>
                </div>
                <div className = "wrap-component" >
                    <h3> 1000+ </h3>
                    <p> Monthly Tests </p>
                </div>
                <div className = "wrap-component" >
                    <h3> 2200 </h3>
                    <p> Test Menu </p>
                </div>
                <div className = "wrap-component" >
                    <h3> 5+ </h3>
                    <p> Cities present in </p>
                </div>
            </div>
        </div>
    )
}

export default ThirdComponent