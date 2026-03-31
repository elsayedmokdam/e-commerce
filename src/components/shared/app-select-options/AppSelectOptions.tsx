import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppSelectOptionsProps } from "./app_select_options.interface";

export function AppSelectOptions({
  placeholder,
  label,
  values,
}: AppSelectOptionsProps) {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 rounded-lg">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {values?.map((value) => (
            <SelectItem key={value.value} value={value.value}>
              {value.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
