"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const [isLoading, setIsLoading] = useState(false);

  const refreshWindow = () => {
    window.location.reload();
  };

  if (state.succeeded) {
    return (
      <div className="space-y-2">
        <h1 className="text-md">Thank you for your message!</h1>
        <button onClick={refreshWindow} className='py-2 px-4 bg-neutral-600 hover:bg-neutral-700 text-neutral-200 rounded-lg'>Reload Page</button>
      </div>
    );
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
            required
            className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400"
          />
          <ValidationError prefix="name" field="Name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
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
            required
            className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          onClick={() => {!isLoading}}
          disabled={state.submitting}
          className="bg-neutral-600 hover:bg-neutral-700 text-neutral-200 rounded-lg py-2 px-4 w-full"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
