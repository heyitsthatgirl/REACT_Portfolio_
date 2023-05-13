import React from "react";
import { useForm, ValidationError } from "@formspree/react";

// styling for the after-submit text
// rest of Contact stying is in CSS file
const styles = {
  p: {
    textAlign: "center",
    fontSize: "40px",
  },
};

// function that returns the Contact section
// form custom created with FormSpree
function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
  if (state.succeeded) {
    return (
      <div>
        <p style={styles.p}>Talk to you soon!</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder=""
            onMouseOver={(e) => {
              e.currentTarget.placeholder = "email required";
            }}
            onMouseOut={(e) => {
              e.currentTarget.placeholder = "";
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder=""
            onMouseOver={(e) => {
              e.currentTarget.placeholder = "message required";
            }}
            onMouseOut={(e) => {
              e.currentTarget.placeholder = "";
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            // disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
