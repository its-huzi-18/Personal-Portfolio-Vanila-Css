"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Components/Footer";
import Icons from "../Components/Icons";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import MainHeading from "../Components/mainHeading";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      to_name: "Huzaifa",
      from_name: formData.name,
      message: formData.message,
      phone: formData.phone,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_6fkubph",
        "template_n294zjv",
        emailData,
        "d1p-lIgdQOeIb88cV"
      )
      .then(() => {
        setStatusMessage("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatusMessage("Failed to send message, please try again later.");
        console.error("EmailJS error:", error.text || error);
      });
  };

  return (
    <div id="Contact" className="contact-section">
      <MainHeading textSize="contact-heading" text1="Contact" text2="Me!" />

      <form onSubmit={handleSubmit} className="form-container inputDiv">
        <div className="input-wrapper input-box">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="nameInput input-field tagName"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="emailInput input-field tagLines"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="input-box input-wrapper">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="numInput input-field tagName"
            type="number"
            placeholder="Mobile Number"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="subInput input-field tagLines"
            type="text"
            placeholder="Email Subject"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="messageInput textarea-field cardTop"
          placeholder="Your Message"
          required

          rows={10}
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="submit-button cardTop"
        />
      </form>

      {statusMessage && (
        <p className="status-message">{statusMessage}</p>
      )}

      <div className="contact-icons">
        <div className="iconsBg icons-background">
          <Icons />
        </div>

        <span className="footIconsDiv contact-icon-container tagLines">
          <i className="emailIcon emailSecIcon">
            <MdOutlineMailOutline />
          </i>
          <span className="emailText contact-email">huzaifawahab2005@gmail.com</span>
          <span className="slash slash-divider">|</span>
          <i className="phoneIcon numIcon">
            <FaPhoneAlt />
          </i>
          <span className="contact-phone numText">+923470670936</span>
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
