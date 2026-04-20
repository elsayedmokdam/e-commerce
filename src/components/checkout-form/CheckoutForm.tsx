"use client";

import AppForm from "@/components/shared/app-form/AppForm";
import AppInput from "@/components/shared/app-input/AppInput";

import { FormField } from "@/components/shared/app-form/app_form.interface";
import { FaCity, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import AppTextarea from "../shared/app-textarea/AppTextarea";
import { $SCHEMAS_REPOSITORY } from "@/schemas/schemas.repo";

const checkoutFields: FormField[] = [
  {
    name: "city",
    type: "input",
    label: "City *",
    placeholder: "e.g. Cairo, Alexandria, Giza",
    props: {
      type: "text",
      className: "rounded-xl",
      icon: <FaCity className="text-gray-400" />,
      position: "start",
    },
  },
  {
    name: "details",
    type: "textarea",
    label: "Street Address *",
    placeholder: "Street name, building number...",
    props: {
      type: "text",
      className: "rounded-xl resize-none",
      icon: <FaMapMarkerAlt className="text-gray-400" />,
      position: "start",
    },
  },
  {
    name: "phone",
    type: "input",
    label: "Phone Number *",
    placeholder: "01xxxxxxxxx",
    props: {
      type: "tel",
      className: "rounded-xl",
      icon: <FaPhone className="text-gray-400" />,
      position: "start",
    },
  },
];

export default function CheckoutForm({ formRef }: any) {
  return (
    <div>
      <AppForm
        fields={checkoutFields}
        components={{
          input: AppInput,
          textarea: AppTextarea,
        }}
        onSubmit={() => {}}
        ref={formRef}
        submitButton={false}
        resetButton={false}
        formClassName="space-y-6"
        layoutClassName="space-y-6"
        schema={$SCHEMAS_REPOSITORY.CHECKOUT_FORM}
      ></AppForm>
    </div>
  );
}
