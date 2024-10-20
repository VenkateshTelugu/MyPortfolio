import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

function Achievements() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="certificates">
      <div className="row text-light ">
          <div className="col-md p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <h5 className="card-title">JAVA certificate from ORACLE Academy</h5>
                <p className="card-text">
                  {/* SIH Finalist In College Level 2023 <br /> */}
                  <hr />
                  I have achieved a Java certification from Oracle Academy, demonstrating my proficiency in Java programming and object-oriented concepts. This certification validates my ability to develop robust Java applications and solutions. Through this program, I gained in-depth knowledge and practical skills in Java development, enhancing my programming capabilities.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="col p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body">
                <h5 className="card-title">Hands on Workshop on MERN Stack by Codegnan ITsolution</h5>
                <p className="card-text">
                  April 2023 <br /> <hr />
                  I participated in a hands-on workshop on the MERN Stack hosted by Codegnan ITsolution in 2023. This workshop provided practical training and insights into building modern web applications using MongoDB, Express.js, React, and Node.js. It enhanced my skills in full-stack development and equipped me with valuable experience in developing and deploying MERN Stack applications.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row  text-light ">
          <div className="col-md  p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Industrial workshop on AWS CLOUD DEVELOPER ASSOCIATE -2024</h5>
                <p className="card-text">
                  October 2023 <br />
                  <hr />
                  I attended an industrial workshop on AWS Cloud Developer Associate in 2024. This workshop focused on the practical aspects of cloud computing with Amazon Web Services (AWS), covering essential topics such as cloud architecture, deployment, and management. It provided hands-on experience and in-depth knowledge, enhancing my skills in cloud development and preparing me for AWS certification.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="col  p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body">
                <h5 className="card-title">Certificate in Scientific Computing with Python,FreeCodeCamp (2021)</h5>
                <p className="card-text">
                  May 2023 <br /> <hr />
                  I earned a Certificate in Scientific Computing with Python from FreeCodeCamp in 2021. This certification highlights my proficiency in using Python for scientific and analytical tasks, including data manipulation, statistical analysis, and problem-solving with libraries such as NumPy, pandas, and Matplotlib.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Achievements;