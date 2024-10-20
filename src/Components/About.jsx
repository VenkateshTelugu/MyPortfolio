import React from "react";
import image from "./image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
//   faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <section className="container about-container my-5" id="about">
        <div className="row head">
          <div className="col">About Me</div>
        </div>
        <div className="row pb-3">
          <div
            className="col my-image-container m-2"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <img
              className="my-image"
              src={image}
              // src="https://media.licdn.com/dms/image/D5603AQHzqzFBrgEjKg/profile-displayphoto-shrink_800_800/0/1676305938174?e=1726704000&v=beta&t=zCws-MfpxiB4skO9RUmTog5Pl-uNRraJosxJw9fyKTw"
              alt="icon"
            />
          </div>
          <div className="col about-text text-light px-2 my-2">
            <div className="col ">
              I am{" "}
              <small
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "orange",
                }}
              >
               Venkatesh Telugu
              </small>
              , a final year Bachelor of Engineering student in Information Technology at  Mahatma Gandhi Institute Of Technology. I am proficient in C, Python, Java, R, and web
              technologies including HTML, CSS, Bootstrap, JavaScript, React.js,
              MongoDB, Express, and Node.js. <br />
              My projects span full-stack development and data science,
              {/* including developing a web platform for CBIT Clubs and building an */}
              iris species classifier using Python and scikit-learn. I have
              hands-on experience in machine learning model development, data
              preprocessing, and IoT applications.
              <br />
              In extracurricular activities, NMMS (NATIONALMEANS CUM MERIT SCHOLARSHIP) -2017,Active in athletics:running and long jump enthusiast.
              · Passionate about indoor games like chess and table tennis.
            </div>

            <div className="col pt-3">
              <div className="row">
                <div className="col-4 my-2">
                  <a href="/#contact">
                    <div className="btn btn-outline-primary">Let's Talk</div>
                  </a>
                </div>
                <div
                  className="col"
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <a
                    href="http://github.com/VenkateshTelugu"
                    alt="icon"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="material-icons github-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/venkatesh-b75583222/"
                    alt="icon"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="material-icons linkedin-icon"
                    />
                  </a>
                  {/* <a href="https://www.instagram.com/moses_q8_007/" alt="icon">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="material-icons instagram-icon"
                    />
                  </a> */}
                  <div className="row">
        <div className="col"
                  style={{marginBottom:"4px"}}>
        <img src="https://visitor-badge.laobi.icu/badge?page_id=mosesportfoliio.netlify.app&left_color=black&right_color=black&left_text=Profile%20Views" alt="icon"/>
    </div>
        </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;