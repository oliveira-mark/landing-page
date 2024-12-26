'use client'
import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};
    if (!name) {
      newErrors.name = "Name is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!message) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {

    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex min-h-screen pt-32">
      <main className="flex flex-col gap-1 row-start-2 items-center justify-items-center text-center w-full">
        <h1 className="text-[1.7rem] sm:text-[2.5rem] max-w-[800px] mx-auto leading-[1.4] mb-1">
          Contact Us
        </h1>
        <p className="max-w-[800px] mx-auto text-[0.9rem] sm:text-[1.1rem] leading-[1.5] text-center opacity-75">
          Have questions or need assistance? We're here to help you get the most out of QuizCommerce.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-[#f3efff] via-[#fcfbff] to-transparent border border-[#f6edff] p-[50px] px-[20px] sm:px-[40px] rounded-[12px] max-w-[500px] mx-2 sm:mx-auto my-[50px] text-left"
        >
          <Image
            src="/assets/img/logo-sales-with-quiz.svg"
            alt="QuizCommerce"
            width={65}
            height={65}
            className="mb-2"
          />
          <h2 className="text-[28px] font-semibold mb-2">
            Get in Touch with Us!
          </h2>
          <p className="text-[16px] opacity-75 mb-4">
            Our team is ready to assist you with any inquiries about QuizCommerce.
            <strong className="block font-semibold mt-3">
              Fill out the form below and we'll get back to you shortly!
            </strong>
          </p>

          <label className="block" htmlFor="name">
            Your Name
          </label>
          <input
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name..."
          />
          {errors.name && <p className="text-red-400 text-sm relative top-[-8px]">{errors.name}</p>}

          <label className="block" htmlFor="email">
            Your Email
          </label>
          <input
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email..."
          />
          {errors.email && <p className="text-red-400 text-sm relative top-[-8px]">{errors.email}</p>}

          <label className="block" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            rows={4}
          />
          {errors.message && <p className="text-red-400 text-sm relative top-[-8px]">{errors.message}</p>}

          <button
            type="submit"
            className="inline-flex bg-gradient-to-r from-[#531bce] to-[#793ffa] text-white px-6 py-4 rounded-md font-bold text-[0.9rem] border border-[#9868ff] relative mt-1"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}