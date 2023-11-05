import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import { Divider } from "@nextui-org/react";
import React from "react";
import ContactCard from "./ContactCard";
import App from "./ContactForm";
import Header from "./Header";

function Contact() {
  return (
    <div className="space-y-6">
      <Header />
      <DashedDivider />
      <ContactCard />
      <Divider />
      <App />
    </div>
  );
}

export default Contact;
