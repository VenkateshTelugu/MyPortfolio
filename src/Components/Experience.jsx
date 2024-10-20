import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';


function Experience() {
  return (
    <>
      <section className="container experience-container my-5" id="experience">
        <div className="row head">
          <div className="col">Experiences</div>
        </div>

        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(0, 0, 0)",
              color: "white",
            }}
          >
           <h4>ServiceNow Developer — Internship</h4>
            <p>Sep 2023</p>
            <p>
            Completed a virtual internship with ServiceNow, gaining experience in configuring
            and customizing IT service management solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(0, 0, 0)",
              color: "white",
            }}
          >
            <h4>Salesforce Developer — Internship</h4>
            <p>Sep 2023</p>
            <p>
            Completed a virtual Salesforce Developer internship, gaining hands-on experience in designing and customizing
            Salesforce solutions using Apex,Visual force,and Salesforce Lightning to optimize business processes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(0, 0, 0)",
              color: "white",
            }}
          >
          <h4>Internet Of Things</h4>
            <p>Nov 2024</p>
            <p>
              Completed an Internet of Things workshop, gaining hands-on
              experience in IoT applications. Explored practical implementations
              to enhance understanding.
            </p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            contentStyle={{
              background: "rgba(0, 0, 0)",
              color: "white",
            }}
          >
            <h4>The MERN Stack & FSD</h4>
            <p>Dec 2023</p>
            <p>
              In the MERN Stack & Full Stack Development course, I gained
              proficiency in MongoDB, Express, React, and Node.js, enabling me
              to build robust, scalable web applications. The course emphasized
              hands-on projects and real-world applications.
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(0, 0, 0)",
              color: "white",
            }}
          >
            {/* <h4>Data Science Course</h4>
            <p>March 2024</p>
            <p>
              In my data science course, I learned to analyze data using Python,
              perform machine learning with scikit-learn, and visualize results
              with Matplotlib and Seaborn.
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
}

export default Experience;