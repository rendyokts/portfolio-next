"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);

  if (state.succeeded) {
    inputName.current.value = null;
    inputEmail.current.value = null;
    inputMessage.current.value = null;
  }

  return (
    <div className="space-y-2">
      <h1 className="text-md">Or send me a message</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            ref={inputName}
            required
            className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400"
          />
          <ValidationError prefix="name" field="Name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            ref={inputEmail}
            required
            className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            ref={inputMessage}
            required
            className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400 h-28"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-neutral-600 hover:bg-neutral-700 text-neutral-200 rounded-lg py-2 px-4 w-full"
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
