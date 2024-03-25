import Typical from "react-typical";

function Profile() {


    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
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
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Fredick Udom</span>
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
                                    "NestJs/NodeJsBackend Dev 💻",
                                    3000,
                                    "Html & Css Web Dev",
                                    3000,
                                    "React Dev",
                                    3000,
                                ]}
                                />
                            </h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;