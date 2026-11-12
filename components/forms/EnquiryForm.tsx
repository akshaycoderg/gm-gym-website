"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

type Field = "name" | "phone" | "message";
type Errors = Partial<Record<Field, string>>;

export function EnquiryForm() {
  const [values, setValues] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    const digits = values.phone.replace(/\D/g, "");

    if (values.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (digits.length < 10 || digits.length > 13) {
      nextErrors.phone = "Enter a valid phone number with 10–13 digits.";
    }
    if (values.message.trim().length < 5) {
      nextErrors.message = "Tell us briefly how we can help.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const text = `Hello GM GYM, I have an enquiry.\n\nName: ${values.name.trim()}\nPhone: ${values.phone.trim()}\nMessage: ${values.message.trim()}`;
    const url = whatsappUrl(text);
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="field-label">
            Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
            className="field-input"
          />
          {errors.name && (
            <p id="enquiry-name-error" className="field-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="field-label">
            Phone Number
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
            className="field-input"
          />
          {errors.phone && (
            <p id="enquiry-phone-error" className="field-error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="field-label">
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          placeholder="Tell us your goal, preferred timing or ask a question…"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "enquiry-message-error" : undefined}
          className="field-input resize-y"
        />
        {errors.message && (
          <p id="enquiry-message-error" className="field-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-lime w-full">
        <Send size={14} aria-hidden="true" />
        Send WhatsApp Enquiry
        <ArrowUpRight size={14} aria-hidden="true" />
      </button>

      {sentUrl ? (
        <div className="flex items-start gap-2.5 border border-lime/30 bg-lime/8 px-3.5 py-3">
          <CheckCircle2
            size={16}
            className="mt-0.5 shrink-0 text-lime"
            aria-hidden="true"
          />
          <p className="text-[0.72rem] leading-relaxed text-chalk/80">
            WhatsApp opened in a new tab. If it didn&apos;t,{" "}
            <a
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lime underline underline-offset-2"
            >
              tap here to send your enquiry
            </a>
            .
          </p>
        </div>
      ) : (
        <p className="text-[0.62rem] leading-relaxed text-ash/85">
          This demo form opens WhatsApp with your details — nothing is stored on
          this website and no backend is required.
        </p>
      )}
    </form>
  );
}
