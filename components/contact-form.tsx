"use client";

import { FormEvent, useState } from "react";
import type { content } from "@/content/site-content";

type FormCopy = (typeof content)["en"]["form"];

const requiredFields = ["name", "email", "location", "service", "privacy"] as const;

export function ContactForm({ copy }: { copy: FormCopy }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!form.get(field)) nextErrors[field] = copy.required;
    });

    const email = String(form.get("email") || "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    window.setTimeout(() => setStatus("success"), 450);
  }

  function fieldError(name: string) {
    return errors[name] ? <span className="field-error">{errors[name]}</span> : null;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          {copy.labels.name}
          <input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />
          {fieldError("name")}
        </label>
        <label>
          {copy.labels.email}
          <input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />
          {fieldError("email")}
        </label>
        <label>
          {copy.labels.phone}
          <input name="phone" autoComplete="tel" />
        </label>
        <label>
          {copy.labels.language}
          <select name="language" defaultValue="">
            <option value="" disabled>Select</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </label>
        <label>
          {copy.labels.location}
          <input name="location" aria-invalid={Boolean(errors.location)} />
          {fieldError("location")}
        </label>
        <label>
          {copy.labels.type}
          <input name="type" />
        </label>
        <label>
          {copy.labels.occupancy}
          <input name="occupancy" />
        </label>
        <label>
          {copy.labels.service}
          <select name="service" defaultValue="" aria-invalid={Boolean(errors.service)}>
            <option value="" disabled>Select</option>
            {copy.serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {fieldError("service")}
        </label>
        <label>
          {copy.labels.contactMethod}
          <input name="contactMethod" />
        </label>
      </div>
      <label>
        {copy.labels.message}
        <textarea name="message" rows={5} />
      </label>
      <label className="privacy-check">
        <input name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} />
        <span>{copy.privacy}</span>
      </label>
      {fieldError("privacy")}
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : copy.submit}
      </button>
      {status === "success" ? <p className="form-success" role="status">{copy.success}</p> : null}
    </form>
  );
}
