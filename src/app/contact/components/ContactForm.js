"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const formKey = process.env.NEXT_PUBLIC_FORM;

  if (!formKey) {
    console.error("Form key is missing. Please set process.env.NEXT_PUBLIC_FORM.");
    return null; // or render an error message
  }

  const [state, handleSubmit] = useForm(formKey);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      inputName.current.value = "";
      inputEmail.current.value = "";
      inputMessage.current.value = "";
    }
  }, [state.succeeded]);

  return (
    <div className="space-y-2">
      {/* Rest of your component code */}
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
