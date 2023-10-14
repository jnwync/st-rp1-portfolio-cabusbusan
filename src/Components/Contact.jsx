import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_tox7kqs",
    //     "template_nv7k7mj",
    //     form.current,
    //     "SybVGsYS52j2TfLbi"
    //   )
    //   .then(
    //     (result) => {
    //       setOpen(true);
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center"
      id="contact"
    >
      <div className="flex flex-col items-center w-full max-w-screen-xl gap-12 p-12">
        <div className="mt-5 text-4xl font-semibold text-center text-primary">
          Contact
        </div>
        <div className="max-w-2xl mt-1 text-2xl text-center text-secondary">
          Please don't hesitate to contact me if you have any questions or if
          any opportunities arise.
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col max-w-2xl gap-3 p-8 mt-5 shadow-md w-95 bg-card rounded-xl"
        >
          <div className="mb-1 text-3xl font-semibold text-center">
            Email me Here!
          </div>
          <input
            className="flex-1 p-3 text-2xl bg-transparent bg-black border-2 border-red-800 rounded-lg outline-none text-primary"
            type="text"
            placeholder="E-mail"
            name="from_email"
          />
          <input
            className="flex-1 p-3 text-2xl bg-transparent bg-black border-2 border-red-800 rounded-lg outline-none text-primary"
            type="text"
            placeholder="Name"
            name="from_name"
          />
          <input
            className="flex-1 p-3 text-2xl bg-transparent bg-black border-2 border-red-800 rounded-lg outline-none text-primary"
            type="text"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="flex-1 p-3 text-2xl bg-transparent bg-black border-2 border-red-800 rounded-lg outline-none text-primary"
            placeholder="Hi, I'm interested!"
            rows="4"
            name="message"
          />
          <input
            className="w-full p-3 mt-2 text-2xl font-semibold text-center bg-red-800 border-none rounded-lg"
            type="submit"
            value="Send"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
