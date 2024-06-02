import React from "react";
import "./ContectUs.css";

function ContactUs() {

  const handlerSubmit = (e) => {
    e.preventDefault();
}


  return (
    <>
      <h2 className="contect_head">Contact Us</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          className="contect_form"
          autocomplete="off"
          onSubmit={handlerSubmit}
        >
          <label className="contect_label" for="name">
            Your Name
          </label>
          <input
            type="text"
            className="contect_input"
            name="name"
            placeholder="Your Name"
          />

          <label className="contect_label" for="email">
            Email
          </label>
          <input
            type="email"
            className="contect_input"
            name="email"
            placeholder="Email"
          />

          <label className="contect_label" for="message">
            Message
          </label>
          <textarea
            name="message"
            className="contect_text_area"
            placeholder="Message"
          ></textarea>

          <div className="text-center">
            <input
              type="submit"
              style={{ marginBottom: "50px" }}
              className="btn"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
