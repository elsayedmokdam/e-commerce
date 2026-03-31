"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { AppInputProps } from "./app_input.interface";

export default function AppInput({
  placeholder,
  label,
  icon,
  iconPosition = "start",
  className = "",
  iconClassName = "",
  ...rest
}: AppInputProps) {
  return (
    <Field>
      {label && <FieldLabel>{label}</FieldLabel>}

      <InputGroup
        className={`bg-white w-full border border-gray-300 py-5 px-2 ${className}`}
      >
        {icon && (
          <InputGroupAddon
            align={`inline-${iconPosition}`}
            className={iconClassName}
          >
            {icon}
          </InputGroupAddon>
        )}

        <InputGroupInput
          placeholder={placeholder}
          className="placeholder:text-gray-400 text-sm"
          {...rest}
        />
      </InputGroup>
    </Field>
  );
}
