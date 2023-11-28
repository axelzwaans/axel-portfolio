"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  InboxIcon,
} from "lucide-react";
import Modal from "./ui/modal";

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8le8dap",
        "template_jyctkxn",
        {
          from_name: form.name,
          to_name: "Axel",
          from_email: form.email,
          to_email: "axelzwaans@hotmail.com",
          subject: form.subject,
          message: form.message,
        },
        "NuBZBAq0praiHiRu3"
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I'll get back to you as soon as possible.");
          setShowModal(true);

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          <Input
            required
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
            minLength={2}
          />
          <User className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Input
            required
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            minLength={2}
          />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Input
            required
            type="text"
            name="subject"
            value={form.subject}
            placeholder="Subject"
            onChange={handleChange}
            minLength={2}
          />
          <InboxIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Textarea
            required
            name="message"
            value={form.message}
            placeholder="Type your message here..."
            onChange={handleChange}
            minLength={10}
          />
          <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button
          className="flex items-center group gap-x-1 max-w-[166px]"
          type="submit"
        >
          Let&apos;s Talk
          <div className="group-hover:translate-x-1 duration-300">
            <ArrowRightIcon size={20} />
          </div>
        </Button>
      </form>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default Form;
