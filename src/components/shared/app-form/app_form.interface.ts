import React from "react";
import { RegisterOptions } from "react-hook-form";
import { ZodSchema } from "zod/v3";

type FieldType = "input" | "textarea" | "select";

interface FormField {
  name: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  rules?: RegisterOptions;
  props?: Record<string, any>; 
}

export interface AppFormProps {
  fields: FormField[];
  components: Partial<Record<FieldType, React.ComponentType<any>>>; // Make components optional
  onSubmit: (data: any) => void;
  buttonText?: string;
  schema?: ZodSchema;
  defaultValues?: Record<string, any>;
}
