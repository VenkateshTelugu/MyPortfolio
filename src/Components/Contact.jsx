  // import React from "react";
  // import { useRef } from "react";
  // import emailjs from "@emailjs/browser";
  // import { toast } from "react-hot-toast";
  // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  // // import {
  // //   faGithub,
  // //   faLinkedin,
  // //   faInstagram,
  // // } from "@fortawesome/free-brands-svg-icons";

  // function Contact() {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     try {
  //       emailjs
  //         .sendForm("service_s4ktm8a", "template_jjuaz15", form.current, {
  //           publicKey: "_H6hUdp1-ITnsGEL4kVdi",
  //         })
  //         .then(
  //           () => {
  //             console.log("SUCCESS!");
  //             form.current.reset();
  //           },
  //           (error) => {
  //             console.log("FAILED...", error.text);
  //           }
  //         );
  //       toast.success("message sent successfully", {
  //         position: "bottom-right",
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("something went wrong!.", {
  //         position: "bottom-right",
  //       });
  //     }
  //   };

  //   return (
  //     <>
  //       <section className="container contact-container pb-5 my-5" id="contact">
  //         <div className="row head">
  //           <div className="col">Contact Me</div>
  //         </div>
  //         <div className="row">
  //           <div className="row text-light ">
  //             <div className="col-md project-col">
  //               <div
  //                 className="card contact-card "
  //                 style={{
  //                   backgroundColor:"black",
  //                   maxWidth: "600px",
  //                   width: "100%",
  //                   marginLeft: "1rem",
  //                   boxShadow: "1px 1px 20px 0 rgba(255, 255, 255, 0.4)", // Add this line for the box shadow
  //                 }}
  //               >
  //                 <div class="card-body">
  //                   <form ref={form} onSubmit={sendEmail}>
  //                     <div className="form-group my-3">
  //                       <input
  //                         type="text"
  //                         className="form-control"
  //                         placeholder="Your Name"
  //                         name="from_name"
  //                         required
  //                       />
  //                     </div>
  //                     <div className="form-group ">
  //                       <input
  //                         type="email"
  //                         className="form-control"
  //                         name="user_email"
  //                         placeholder="Enter Your Email"
  //                         required
  //                       />
  //                       <small id="emailHelp" className="form-text text-secondary ">
  //                         I'll never share your email with anyone else.
  //                       </small>
  //                     </div>
  //                     <div className="form-group  my-3">
  //                       <textarea
  //                         type="text"
  //                         rows={10}
  //                         className="form-control form-message"
  //                         placeholder="Enter Message Here"
  //                         name="message"
  //                         required
  //                       />
  //                     </div>
  //                     <button
  //                       type="submit"
  //                       className="btn btn-outline-success"
  //                       style={{ width: "100%" }}
  //                     >
  //                       Submit
  //                     </button>
  //                   </form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* <div className="row ">
  //             <div className="col project-col p-1">
  //               <div
  //                 className="card contact-card "
  //                 style={{
  //                   width: "30rem",
  //                   backgroundColor: "black",
  //                 }}
  //               >
  //                 <div class="card-body icons-body">
  //                   <a
  //                     href="https://github.com/Moses-Padirolu?tab=repositories"
  //                     alt="icon"
  //                   >
  //                     <FontAwesomeIcon
  //                       icon={faGithub}
  //                       className="material-icons github-icon"
  //                     />
  //                   </a>
  //                   <a
  //                     href="https://www.linkedin.com/in/moses-padirolu-691a80258/"
  //                     alt="icon"
  //                   >
  //                     <FontAwesomeIcon
  //                       icon={faLinkedin}
  //                       className="material-icons linkedin-icon"
  //                     />
  //                   </a>
  //                   <a href="https://www.instagram.com/moses_q8_007/" atl="icon">
  //                     <FontAwesomeIcon
  //                       icon={faInstagram}
  //                       className="material-icons instagram-icon"
  //                     />
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div> */}
  //         </div>
  //       </section>
  //     </>
  //   );
  // }

  // export default Contact;


//   import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_s4ktm8a", // Service ID
//         "template_jjuaz15", // Template ID
//         form.current,
//         "_H6hUdp1-ITnsGEL4kVdi" // Public Key
//       )
//       .then(
//         () => {
//           form.current.reset();
//           toast.success("Message sent successfully!", {
//             position: "bottom-right",
//           });
//         },
//         (error) => {
//           console.error("FAILED...", error.text);
//           toast.error("Something went wrong!", {
//             position: "bottom-right",
//           });
//         }
//       );
//   };

//   return (
//     <section className="container my-5" id="contact">
//       <h2>Contact Me</h2>
//       <form ref={form} onSubmit={sendEmail} className="my-4">
//         <div className="form-group">
//           <input
//             type="text"
//             name="from_name"
//             className="form-control"
//             placeholder="Your Name"
//             required
//           />
//         </div>
//         <div className="form-group my-3">
//           <input
//             type="email"
//             name="user_email"
//             className="form-control"
//             placeholder="Your Email"
//             required
//           />
//         </div>
//         <div className="form-group my-3">
//           <textarea
//             name="message"
//             rows="5"
//             className="form-control"
//             placeholder="Your Message"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Contact;import React, { useRef, useEffect } from "react";import React, { useRef, useEffect } from "react"; // Correct imports
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4xqjdq", // Service ID
        "template_90zl9yg", // Template ID
        form.current,
        "_H6hUdp1-ITnsGEL4kVdi" // Public Key
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "bottom-right",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Something went wrong!", {
            position: "bottom-right",
          });
        }
      );
  };

  return (
    <section className="container my-5" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="my-4">
        <div className="form-group">
          <input
            type="text"
            name="from_name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group my-3">
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group my-3">
          <textarea
            name="message"
            rows="5"
            className="form-control"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
