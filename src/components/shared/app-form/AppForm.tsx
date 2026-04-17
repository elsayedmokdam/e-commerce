import { useForm, Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProps } from "./app_form.interface";
import { useMemo } from "react";
import { ImSpinner } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

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
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    defaultValues,
    mode: "all",
    resolver: schema ? zodResolver(schema as any) : undefined,
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

      {/* Custom children (checkboxes, alerts, etc.) */}
      {children}

      {/* Buttons */}
      {(submitButton || resetButton) && (
        <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-2">
          {submitButton && (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-main-color text-white text-base font-semibold px-6 py-3 rounded-xl disabled:opacity-50 hover:bg-green-700 transition duration-200 ease-in-out w-full ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} flex items-center justify-center gap-2 group`}
            >
              <span>{buttonText}</span>
              {isSubmitting ? (
                <ImSpinner className="animate-spin" />
              ) : (
                <span className="group-hover:transform group-hover:translate-x-2 duration-200 ease-in-out">
                  <FaArrowRight />
                </span>
              )}
            </button>
          )}

          {resetButton && (
            <button
              type="button"
              onClick={() => reset()}
              className="w-full bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition duration-200 ease-in-out cursor-pointer text-gray-800 font-semibold"
            >
              Reset
            </button>
          )}
        </div>
      )}
    </form>
  );
}
