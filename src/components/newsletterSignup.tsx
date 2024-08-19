"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SubscribeResponse {
  message: string;
}

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = (await response.json()) as SubscribeResponse;
        throw new Error(data.message || "An error occurred");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred",
      );
    }
  }

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 py-8 shadow-md dark:bg-gray-800">
      <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Stay up to date with our updates!
      </p>
      <form onSubmit={onSubmit} className="flex items-center space-x-2">
        <div className="flex-1">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={
              status === "success"
                ? "Thanks for signing up!"
                : "Enter your email"
            }
            className={status === "error" ? "border-red-500" : ""}
            disabled={status === "success"}
          />
        </div>
        <Button type="submit" className="ml-2">
          Sign Up
        </Button>
      </form>
      {status === "error" && (
        <p className="pt-2 text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
