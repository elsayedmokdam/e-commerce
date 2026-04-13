import React from "react";
import { RegisterOptions, FieldValues, UseFormReturn } from "react-hook-form";
import { ZodTypeAny } from "zod/v3";

export type FieldType = "input" | "textarea" | "select";

export interface FormField {
  name: string;
  type: FieldType;

  label?: string;
  placeholder?: string;

  rules?: RegisterOptions;

  /** Props passed to the component */
  props?: Record<string, any>;

  /** Custom class for field */
  className?: string;

  /** Conditional rendering */
  showWhen?: (values: Record<string, any>) => boolean;

  hidden?: boolean;
}

export interface ButtonConfig {
  text?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface ActionButton {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface AppFormProps {
  /** Fields configuration */
  fields: FormField[];

  /** Components map (input, textarea, select) */
  components: Partial<Record<FieldType, React.ComponentType<any>>>;

  /** Submit handler */
  onSubmit: (data: any) => Promise<void> | void;

  /** Optional error handler */
  onError?: (error: any) => void;

  /** Buttons */
  buttonText?: string;
  submitButton?: boolean | ButtonConfig;
  resetButton?: boolean | ButtonConfig;
  actionButtons?: ActionButton[];

  /** Validation schema */
  schema?: ZodTypeAny ;

  /** Default form values */
  defaultValues?: Record<string, any>;

  /** Layout */
  layoutClassName?: string;
  /** Styles */
  formClassName?: string;
  fieldsContainerClassName?: string;

  /** Form behavior */
  mode?: "onSubmit" | "onBlur" | "onChange" | "onTouched" | "all";
  shouldUnregister?: boolean;

  /** Watch changes */
  onFormChange?: (values: Record<string, any>) => void;

  /** Expose form methods */
  formRef?: React.Ref<UseFormReturn<FieldValues>>;

  /** Extra JSX */
  children?: React.ReactNode;
}

