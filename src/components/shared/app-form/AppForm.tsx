"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { ImSpinner } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

import { FieldLabel, FieldError } from "@/components/ui/field";
import { AppFormProps } from "./app_form.interface";

export default function AppForm({
  fields,
  components,
  onSubmit,
  schema,
  defaultValues,
  buttonText = "Submit",
  submitButton = true,
  resetButton = false,
  formClassName = "space-y-4",
  layoutClassName = "",
  children,
}: AppFormProps) {

  const resolver = useMemo(() => {
    if (!schema) return undefined;
    return zodResolver(schema as any);
  }, [schema]);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver,
  });

  const visibleFields = useMemo(() => {
    return fields?.filter((f) => !f.hidden) ?? [];
  }, [fields]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      {/* Fields */}
      <div className={layoutClassName}>
        {visibleFields.map((fieldItem) => {
          const Component = components?.[fieldItem.type];

          if (!Component) {
            if (process.env.NODE_ENV === "development") {
              console.warn(
                `[AppForm] Missing component for type: ${fieldItem.type}`,
              );
            }
            return null;
          }

          return (
            <Controller
              key={fieldItem.name}
              name={fieldItem.name}
              control={control}
              render={({ field, fieldState }) => (
                <div data-invalid={fieldState.invalid}>
                  {fieldItem.label && (
                    <FieldLabel>{fieldItem.label}</FieldLabel>
                  )}

                  <Component
                    {...field}
                    {...fieldItem.props}
                    value={field.value ?? ""}
                    placeholder={fieldItem.placeholder}
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              )}
            />
          );
        })}
      </div>

      {/* Extra content */}
      {children}

      {/* Actions */}
      {(submitButton || resetButton) && (
        <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-2">
          {submitButton && (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-main-color text-white font-semibold px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2 transition
                ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-green-700"}`}
            >
              <span>{buttonText}</span>

              {isSubmitting ? (
                <ImSpinner className="animate-spin" />
              ) : (
                <FaArrowRight />
              )}
            </button>
          )}

          {resetButton && (
            <button
              type="button"
              onClick={() => reset()}
              className="w-full bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Reset
            </button>
          )}
        </div>
      )}
    </form>
  );
}
