import React, { useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const employeerEmail = useRef();
  const content = useRef();
  const [sending, sent] = useState(false);

  const emailreport = (from, email, subject, content) => {
    fetch(
      "https://https-uidiscoveriesmailer-onrender-com.onrender.com/sendEmail",
      // "http://localhost:3001/sendEmail",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: from,
          email: email,
          subject: subject,
          content: content,
        }),
      }
    )
      .then((res) => {
        res.json();
        if (res.ok) {
          sent(true);
        }
        console.log(res);
      })
      .then((data) => {
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailreport(
      "Ui Discoveries",
      "clifford.dle.arnejo@gmail.com",
      // "clifford.dle.arnejo@gmail.com",
      `Employeer's Feedback (${employeerEmail.current.value})`,
      content.current.value
    );
  };

  return (
    <div className="h-full grid content-center gap-2 max-w-[400px]">
      <p className="">
        If you have any inquiries or would like to discuss potential
        collaborations, please don't hesitate to get in touch with me.
      </p>
      <hr />
      <form className="grid gap-2" onSubmit={handleSubmit}>
        <span className="block text-sm font-medium text-slate-700 ">Email</span>
        <input
          ref={employeerEmail}
          type="email"
          className="p-2"
          required
          placeholder="Enter your Email"
        />
        <span className="block text-sm font-medium text-slate-700 ">
          Message
        </span>
        <textarea
          ref={content}
          name=""
          id=""
          cols="30"
          rows="10"
          className="p-2 resize-none"
          placeholder="Your message goes here"
        ></textarea>
        <button className="btn btn-primary flex items-center gap-3">
          SEND <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
}

export default Contact;
