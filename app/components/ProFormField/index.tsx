"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

const valueTypeMap = {
  text: Input,
  textarea: Textarea,
};

export type ValueTypeEnum = keyof typeof valueTypeMap;

export type FormFieldProps<ValueType extends ValueTypeEnum> = {
  name: string;
  label?: ReactNode;
  description?: ReactNode;
  valueType?: ValueType;
  className?: string;
};

export const ProFormField = <ValueType extends ValueTypeEnum = "text">(
  props: FormFieldProps<ValueType>
) => {
  const { name, label, description, valueType = "text", className } = props;
  const Component = valueTypeMap[valueType];
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {/* @ts-ignore */}
            <Component className={className} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
