"use client";

import { ReactNode } from "react";
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export type DialogProps = {
  title: ReactNode;
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Dialog = (props: DialogProps) => {
  const { children, title, open, onOpenChange } = props;
  return (
    <DialogComponent open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => {}}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{children}</DialogDescription>
      </DialogContent>
    </DialogComponent>
  );
};
