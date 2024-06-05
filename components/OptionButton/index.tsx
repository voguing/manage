import React from "react";
import { Button, ButtonProps } from "../ui/button";

export const OptionButton: React.FC<{
  options: ButtonProps[];
  variant?: ButtonProps["variant"];
}> = ({ options, variant }) => {
  return (
    <div className="flex gap-2">
      {options
        .filter((item) => !item.hidden)
        .map((item, index) => {
          return <Button key={`${index}`} variant={variant} {...item} />;
        })}
    </div>
  );
};
