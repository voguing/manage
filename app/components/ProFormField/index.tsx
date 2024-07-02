"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

const valueTypeMap = {
  text: Input,
  textarea: Textarea,
};

export type ValueTypeEnum = keyof typeof valueTypeMap | "number";

export type FormFieldProps<ValueType extends ValueTypeEnum> = {
  name: string;
  label?: ReactNode;
  description?: ReactNode;
  valueType?: ValueType;
  className?: string;
  initialValue?: any;
};

// eslint-disable-next-line react/display-name
const InputComponent = forwardRef(
  (
    {
      valueType = "text",
      ...rest
    }: {
      valueType: ValueTypeEnum;
      className?: string;
    },
    ref: any
  ) => {
    const Component = valueTypeMap[valueType as "text"];
    if (Component) {
      return <Component {...rest} ref={ref} />;
    }

    if (valueType === "number")
      return <Input type="number" {...rest} ref={ref} />;

    throw new Error("不支持的 valueType 类型");
  }
);

export const ProFormField = <ValueType extends ValueTypeEnum = "text">(
  props: FormFieldProps<ValueType>
) => {
  const {
    name,
    label,
    description,
    valueType = "text",
    className,
    initialValue,
  } = props;
  const form = useFormContext();

  return (
    // <FormField
    //   defaultValue={initialValue}
    //   control={form.control}
    //   name={name}
    //   render={({ field }) => (
    //     <FormItem>
    //       {label && <FormLabel>{label}</FormLabel>}
    //       <FormControl>
    //         {/* @ts-ignore */}
    //         <InputComponent
    //           valueType={valueType}
    //           className={className}
    //           {...field}
    //           {...form.register(name, {
    //             valueAsNumber: valueType === "number",
    //           })}
    //         />
    //       </FormControl>
    //       {description && <FormDescription>{description}</FormDescription>}
    //       <FormMessage />
    //     </FormItem>
    //   )}
    // />
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        {/* @ts-ignore */}
        <InputComponent
          valueType={valueType}
          className={className}
          {...form.register(name, {
            valueAsNumber: valueType === "number",
          })}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
