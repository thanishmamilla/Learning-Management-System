import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Inline Textarea component
const Textarea = ({ id, name, value, onChange, placeholder, required, className }) => (
  <textarea
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={className}
  />
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const regex = /^[A-Za-z0-9\s@.]*$/; // Only letters, numbers, spaces, and @
    if (regex.test(value)) {
      setFormData({ ...formData, [name]: value });
    } else {
      toast.error("Special characters are not allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      window.location.href = `mailto:ethical977@gmail.com?subject=Contact Us Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      toast.success("Your message has been sent!");
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/image3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We'd love to hear from you!
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;