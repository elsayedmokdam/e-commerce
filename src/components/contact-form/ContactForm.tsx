"use client";

import AppForm, { AppFormRef } from "@/components/shared/app-form/AppForm";
import AppInput from "@/components/shared/app-input/AppInput";
import AppTextarea from "@/components/shared/app-textarea/AppTextarea";

import { CONTACT_SCHEMA } from "@/schemas/contactSchema";
import { FormField } from "../shared/app-form/app_form.interface";
import { notify } from "@/services/utils/helpers/alerts";
import { useRef } from "react";

const fields: FormField[] = [
  {
    name: "name",
    label: "Full Name",
    type: "input",
    placeholder: "Enter your full name",
    props: {
      type: "text",
      className: "rounded-xl border-gray-200 focus-within:border-main-color",
    },
  },
  {
    name: "email",
    label: "Email Address",
    type: "input",
    placeholder: "Enter your email address",
    props: {
      type: "email",
      className: "rounded-xl border-gray-200 focus-within:border-main-color",
    },
  },
  {
    name: "subject",
    label: "Subject",
    type: "input",
    placeholder: "What can we help you with?",
    props: {
      type: "text",
      className: "rounded-xl border-gray-200 focus-within:border-main-color",
    },
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Write your message here...",
    props: {
      rows: 6,
      className: "rounded-xl border-gray-200 focus:border-main-color",
    },
  },
];

export default function ContactForm() {
  const formRef = useRef<AppFormRef>(null);
  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    notify.success("Message sent successfully!");
    
    formRef.current?.reset();

    setTimeout(() => {
      notify.success("We will message you soon!");
    }, 1000);
  };

  return (
    <AppForm
      ref={formRef}
      fields={fields}
      components={{
        input: AppInput,
        textarea: AppTextarea,
      }}
      onSubmit={onSubmit}
      schema={CONTACT_SCHEMA}
      formClassName="space-y-6"
      layoutClassName="space-y-5"
      buttonText="Send Message"
    />
  );
}
