import React, { useRef, useState } from "react";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const employeerEmail = useRef();
  const content = useRef();
  const [isSent, sent] = useState(true);

  const emailreport = (from, email, subject, content) => {
    fetch(
      "https://https-uidiscoveriesmailer-onrender-com.onrender.com/sendEmail",
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
    sent(false);
    emailreport(
      "Ui Discoveries",
      "clifford.dle.arnejo@gmail.com",
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
          cols="20"
          rows="5"
          className="p-2 resize-none"
          placeholder="Your message goes here"
        ></textarea>
        <button className="btn btn-primary flex items-center gap-3">
          {isSent ? (
            "SEND"
          ) : (
            <span className="loading loading-dots loading-sm"></span>
          )}
          {isSent && "SEND" && <FaTelegramPlane />}
        </button>
      </form>
      <div className="divider lg:divider-vertical">OR</div>
      <h4 className="flex gap-2 align-center font-bold">
        <FaPhoneAlt /> Contact Number
      </h4>
      <li>+639269247441</li>
      <li>+639511451225</li>
    </div>
  );
}

export default Contact;
