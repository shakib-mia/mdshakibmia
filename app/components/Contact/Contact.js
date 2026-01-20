"use client"; // client component needed for useState and form interactivity
import React, { useState } from "react";
import Swal from "sweetalert2";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Example: fetch to /api/contact
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        e.target.reset();
        Swal.fire("Message sent successfully!");
        setSending(false);

        e.target.reset();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSending(false);
        Swal.fire({
          icon: "error",
          title: "OOPS",
          text: data.error || "Failed to send message",
        });
      }
    } catch (err) {
      Swal.fire("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:justify-center md:items-center md:h-full lg:py-12 px-4">
      <div className="lg:w-1/3 text-center mx-auto">
        <h1 className="font-bold! mb-2">Contact Me</h1>
        <p>
          Have a project, idea, or just want to say hi? Drop me a message and
          I’ll get back to you soon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 shadow-[0_0_20px_8px] mx-auto p-6 shadow-primary/20 mt-12 space-y-4 rounded-lg"
      >
        <Input
          label="Name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          // required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          // required
        />
        <Input
          label="Subject"
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          // required
        />
        <Input
          label="Message"
          name="message"
          isTextarea={true}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          // required
        />

        {/* <button
          type="submit"
          className="bg-violet-600 text-white p-2 rounded hover:bg-violet-700 transition w-full"
        >
          Send
        </button> */}
        <Button disabled={sending} className="w-full" type="submit">
          Send{sending && "ing"}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
