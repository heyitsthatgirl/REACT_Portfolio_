import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xpzebeyy");
  if (state.succeeded) {
    return <p>Hey, thanks for reaching out. Talk to you soon!</p>;
  }
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
