"use client";
import { FormField } from "../shared/app-form/app_form.interface";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AppInput from "../shared/app-input/AppInput";
import AppForm, { AppFormRef } from "../shared/app-form/AppForm";
import { updateProfileAction } from "@/services/actions/update_profile.action";
import { notify } from "@/services/utils/helpers/alerts";
import { $SCHEMAS_REPOSITORY } from "@/schemas/schemas.repo";
import { useRef } from "react";

export default function UpdateProfileForm() {
  const formRef = useRef<AppFormRef>(null);
  const profileFormFields: FormField[] = [
    {
      name: "name",
      type: "input",
      label: "Full Name",
      placeholder: "Enter your full name",
      props: {
        type: "text",
        autoComplete: "name",
        className: "rounded-xl border-slate-200 focus:border-emerald-500",
        icon: <FaUser className="size-4 text-slate-400" />,
        position: "start",
      },
    },
    {
      name: "email",
      type: "input",
      label: "Email Address",
      placeholder: "Enter your email",
      props: {
        type: "email",
        autoComplete: "email",
        className: "rounded-xl border-slate-200 focus:border-emerald-500",
        icon: <MdEmail className="size-4 text-slate-400" />,
        position: "start",
      },
    },
    {
      name: "phone",
      type: "input",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      props: {
        type: "tel",
        autoComplete: "tel",
        className: "rounded-xl border-slate-200 focus:border-emerald-500",
        icon: <FaPhone className="size-4 text-slate-400" />,
        position: "start",
      },
    },
  ];

  const handleSaveProfile = async (data: any) => {
    const response = await updateProfileAction(data);

    if (response.ok) {
      notify.success("Profile updated successfully!");
      formRef.current?.reset();
    }
    notify.error(response.error.data.errors.msg);
  };
  return (
    <>
      <AppForm
        fields={profileFormFields}
        components={{ input: AppInput }}
        onSubmit={handleSaveProfile}
        buttonText="Save Changes"
        formClassName="space-y-5"
        layoutClassName="space-y-4"
        schema={$SCHEMAS_REPOSITORY.UPDATE_PROFILE_FORM}
        ref={formRef}
      />
    </>
  );
}
