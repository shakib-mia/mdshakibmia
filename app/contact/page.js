"use client"; // client component needed for useState and form interactivity
import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire("Message sent successfully!");
    // // Example: fetch to /api/contact
    // try {
    //   const res = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     e.target.reset();
    //     setFormData({ name: "", email: "", subject: "", message: "" });
    //   } else {
    //     alert(data.error || "Failed to send message");
    //   }
    // } catch (err) {
    //   alert("Something went wrong");
    //   console.error(err);
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full py-12 px-4">
      <div className="lg:w-1/3 text-center mx-auto">
        <h1 className="font-bold! mb-2">Contact Me</h1>
        <p>
          Have a project, idea, or just want to say hi? Drop me a message and
          I’ll get back to you soon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 shadow-[0_0_20px_8px] mx-auto p-6 shadow-primary/20 mt-12 space-y-4 rounded-lg"
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
        <Button className="w-full" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
