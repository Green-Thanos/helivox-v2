"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { type FormData, submitForm, InquiryType } from "@/lib/calls";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    inquiryType: InquiryType.General,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handler for form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setForm({
      ...form,
      inquiryType: value as InquiryType,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handlesubmit");
    try {
      await submitForm(form);
      setForm({
        inquiryType: InquiryType.General,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  // Prevent form submission on Enter key press
  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && e.target instanceof HTMLInputElement)
      e.preventDefault();
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Have a question or want to work with us? Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <p className="mt-3 text-lg text-gray-500">
            Developer note: We are sorry that the form is running into issues. 
            For now, feel free to reach out to us directly at {" "}
            <a className="mt-3 text-lg text-green-500" href="mailto:helivoxofficial@helivox.com">helivoxofficial@helivox.com</a>!
          </p>
        </div>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          onKeyDown={checkKeyDown}
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="inquiry-type"
                className="block text-sm font-medium text-gray-700"
              >
                Inquiry Type
              </label>
              <div className="mt-1">
                <Select
                  defaultValue={form.inquiryType}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General">General Inquiry</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                    <SelectItem value="Opportunities">Opportunities</SelectItem>
                    <SelectItem value="Media">Media</SelectItem>
                    <SelectItem value="Support">Support</SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone (optional)
              </label>
              <div className="mt-1">
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter your message"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
