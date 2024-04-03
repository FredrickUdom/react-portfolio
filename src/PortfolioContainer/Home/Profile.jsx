import Typical from "react-typical";
import '../Home/Profile.css'


function Profile() {


    return (

        <div className="profile-container">

            <div className="profile-parent">


                <div className="profile-details">
{/* starting nav */}
               
{/* ending nav */}
                    <div className="colz">
                        <div className="colz-icon">

                           
                            <a href="">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Fredrick Udom</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h3>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Techie 😎",
                                        3000,
                                        "NestJs Backend Dev 💻",
                                        3000,
                                        "Html & Css Web Dev",
                                        3000,
                                        "MERN Stack Dev",
                                        3000,
                                    ]}
                                />
                            </h3>
                            <span className="profile-role-tagline">
                                Knack of building application with frontend and backend operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn btn-primary">
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="fredrickUdom_Resume.pdf" download=" Fredrick fredrickUdom_Resume.pdf"><button className="btn highlighted-btn">Get Resume</button></a>

                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>


    )
}
export default Profile;