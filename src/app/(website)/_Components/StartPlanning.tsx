"use client";

import { useMutation } from "@tanstack/react-query";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  homeBase: string;
  instagram: string;
  details: string;
}

export default function StartPlanning() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    homeBase: "",
    instagram: "",
    details: "",
  });

  const formSubmitMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/contact/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            homeBase: formData.homeBase,
            instagram: formData.instagram,
            description: formData.details,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
      return res.json();
    },
    onSuccess: (data) => {
      toast.success(data.message || "Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        homeBase: "",
        instagram: "",
        details: "",
      });
    },
    onError: (error) => {
      alert(error?.message || "Something went wrong");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formSubmitMutation.mutate();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black w-full">
      <section
        className="mx-auto max-w-7xl pb-20 px-4 lg:px-0 sm:px-6"
        id="start-planning"
      >
        <h1 className="lg:mb-12 mb-6 font-serif lg:text-6xl text-4xl md:text-3xl font-bold text-white text-start md:text-left">
          Start planning
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0 w-full"
            />
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="homeBase"
              placeholder="Home base"
              value={formData.homeBase}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0 w-full"
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram (optional)"
              value={formData.instagram}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0 w-full"
            />
          </div>

          {/* Textarea */}
          <textarea
            name="details"
            placeholder="What vibe? When? How many nights? Non-negotiables? Budget?"
            rows={5}
            value={formData.details}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-600 py-4 font-medium text-black transition-colors hover:bg-teal-500"
          >
            Submit
          </button>

          <p className="text-sm text-zinc-500 text-center md:text-left">
            Prefer Signal? Add a note and we&apos;ll switch.
          </p>
        </form>
      </section>
    </div>
  );
}
