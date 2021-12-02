import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xyyogokr");

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                className="form-input"
                type="text"
                name="name"
                id="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />

            <label htmlFor="email">Email</label>
            <input
                className="form-input"
                type="email"
                name="email"
                id="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea
                className="form-input"
                name="message"
                rows="5"
                cols="33"
                id="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button type="submit" disabled={state.submitting} className="btn submit-btn">Submit</button>
            <ValidationError errors={state.errors} />
        </form>
    );
}