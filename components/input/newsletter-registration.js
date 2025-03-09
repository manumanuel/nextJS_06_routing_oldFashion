import { useRef, useState } from "react";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const [email, setEmail] = useState("");

  function registrationHandler(event) {
    event.preventDefault();
    console.log(event);
    // fetch user input (state or refs)
    setEmail(event.emailInputRef.current.value);

    // optional: validate input

    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
