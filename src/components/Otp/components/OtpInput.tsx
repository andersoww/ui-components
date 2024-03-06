"use client";

import { ClientOnly } from "@/components/ClientOnly";
import clsx from "clsx";
import {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface IOtpInput extends InputHTMLAttributes<HTMLInputElement> {
  OtpRef?: HTMLInputElement[] | null;
  index?: number;
  onChangeOtp?: (e: ChangeEvent, index?: number) => void;
  onKeyUpChangeOtp?: (
    e?: KeyboardEvent<HTMLInputElement>,
    index?: number
  ) => void;
  onPasteOtp?: (e: ClipboardEvent<HTMLInputElement>) => void;
}

const OtpInput = forwardRef<HTMLInputElement, IOtpInput>(
  (
    {
      className,
      index,
      OtpRef,
      onKeyUpChangeOtp,
      onChangeOtp,
      onPasteOtp,
      ...rest
    },
    ref
  ) => {
    return (
      <ClientOnly
        fallback={
          <div className="w-16 h-16 rounded-lg animate-pulse bg-[#434747]" />
        }
      >
        <input
          type="tel"
          className={clsx(
            "w-16 h-16 rounded-lg bg-[#252828] text-xl text-center appearance-none",
            className
          )}
          maxLength={1}
          ref={(referer) => OtpRef?.push(referer as HTMLInputElement)}
          onChange={(e) => onChangeOtp && onChangeOtp(e, index)}
          onKeyDown={(e) => onKeyUpChangeOtp && onKeyUpChangeOtp(e, index)}
          onPaste={onPasteOtp}
          placeholder="○"
          {...rest}
        />
      </ClientOnly>
    );
  }
);

OtpInput.displayName = "OtpInput";

export { OtpInput };
