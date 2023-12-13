import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <h2 className={classes.heading}>Customer Query Form</h2>

      <div className={classes.contactUs}>
        <div className={classes.clientService}>
          {/* <img src={help} alt="Customer Help" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.136627517295!2d88.38246357450994!3d22.53655413429202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276bee4cd9133%3A0x713052a80186b0d!2s37%2CA%2C%20Topsia%20Rd%2C%20Topsia%2C%20Kolkata%2C%20West%20Bengal%20700046!5e0!3m2!1sen!2sin!4v1701434279431!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bengal Comfort"
          ></iframe>
        </div>
        <div className={classes.contactForm}>
          <form
            action="https://formsubmit.co/bengalcomfort@gmail.com"
            method="POST"
          >
            <input
              type="text"
              id="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Your Number"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Enter Your Query" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
