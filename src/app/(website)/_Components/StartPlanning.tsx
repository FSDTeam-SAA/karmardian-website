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

  // React Query mutation for form submission
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
      toast.success(data.message || "Form submitted successfully !");
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
    <div className="bg-black">
      <section className="mx-auto max-w-7xl pb-20" id="start-planning">
        <h1 className="mb-12 font-serif text-6xl font-bold text-white">
          Start planning
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First row - Name and Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Second row - Home base and Instagram */}
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="homeBase"
              placeholder="Home base"
              value={formData.homeBase}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0"
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram (optional)"
              value={formData.instagram}
              onChange={handleChange}
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-4 text-zinc-400 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none focus:ring-0"
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

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-600 py-4 font-medium text-black transition-colors hover:bg-teal-500"
          >
            Submit
          </button>

          {/* Footer text */}
          <p className="text-sm text-zinc-500">
            Prefer Signal? Add a note and we&apos;ll switch.
          </p>
        </form>
      </section>
      {/* <div className="flex justify-center pb-8">
        <p className="inline-block px-6 py-2 text-center  text-white rounded-md shadow-md transition-all duration-200">
          SOT# 2166950-40 and TCRC ID: 710089
        </p>
      </div> */}
    </div>
  );
}
