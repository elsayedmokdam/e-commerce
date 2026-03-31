"use client";

import { useForm, Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProps } from "./app_form.interface";

export default function AppForm({
  fields,
  components,
  onSubmit,
  buttonText = "Submit",
  schema,
  defaultValues,
}: AppFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues,
    shouldUnregister: true,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((fieldItem) => {
        const Component = components[fieldItem.type];

        if (!Component) {
          return null;
        }

        return (
          <Controller
            key={`${fieldItem.name}-${fieldItem.type}`}
            name={fieldItem.name}
            control={control}
            rules={fieldItem.rules}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {fieldItem.label && (
                  <FieldLabel htmlFor={field.name}>
                    {fieldItem.label}
                  </FieldLabel>
                )}

                {/* Dynamic Component */}
                <Component
                  {...field}
                  {...fieldItem.props}
                  id={field.name}
                  placeholder={fieldItem.placeholder}
                  aria-invalid={fieldState.invalid}
                  value={field.value ?? ""} // fix uncontrolled warning
                />

                {/* Error */}
                {fieldState.error?.message && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        );
      })}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-main-color text-white px-4 py-2 rounded-lg disabled:opacity-50"
      >
        {buttonText}
        {isSubmitting && (
          <span>
            <i className="fa-solid fa-spinner animate-spin"></i>
          </span>
        )}
      </button>
    </form>
  );
}
