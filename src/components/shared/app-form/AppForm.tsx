"use client";

import { useForm, Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProps } from "./app_form.interface";
import { useMemo } from "react";

export default function AppForm({
  fields,
  components,
  onSubmit,
  schema,
  defaultValues,
  submitButton = true,
  resetButton = false,
  formClassName = "space-y-4",
  layoutClassName = "",
}: AppFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    defaultValues,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  // Filter visible fields only
  const visibleFields = useMemo(
    () => fields.filter((field) => !field.hidden),
    [fields],
  );


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      {/* Fields */}
      <div className={layoutClassName}>
        {visibleFields.map((fieldItem) => {
          const Component = components[fieldItem.type];
          if (!Component) return null;

          return (
            <Controller
              key={fieldItem.name}
              name={fieldItem.name}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  {fieldItem.label && (
                    <FieldLabel>{fieldItem.label}</FieldLabel>
                  )}

                  <Component
                    {...field}
                    {...fieldItem.props}
                    placeholder={fieldItem.placeholder}
                    value={field.value ?? ""}
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          );
        })}
      </div>

      {/* Buttons */}
      {(submitButton || resetButton) && (
        <div className="flex gap-2 mt-6">
          {submitButton && (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-main-color text-white text-xl px-6 py-2 rounded-lg disabled:opacity-50 hover:bg-green-700 transition duration-200 ease-in-out w-full"
            >
              Submit
            </button>
          )}

          {resetButton && (
            <button
              type="button"
              onClick={() => reset()}
              className="w-full bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out"
            >
              Reset
            </button>
          )}
        </div>
      )}
    </form>
  );
}
