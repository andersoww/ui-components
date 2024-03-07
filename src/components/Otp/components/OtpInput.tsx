"use client";

import { ClientOnly } from "@/components/ClientOnly";
import clsx from "clsx";
import {
  ChangeEvent,
  ClipboardEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
} from "react";

interface IOtpInput extends InputHTMLAttributes<HTMLInputElement> {
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
    { className, index, onKeyUpChangeOtp, onChangeOtp, onPasteOtp, ...rest },
    ref
  ) => {
    return (
      <ClientOnly
        fallback={
          <div className="w-16 h-16 rounded-lg animate-pulse bg-[#434747]" />
        }
      >
        <input
          autoFocus={index === 0}
          type="tel"
          className={clsx(
            "w-16 h-16 rounded-lg bg-[#252828] text-xl text-center appearance-none hover:border-2 border-[#0a9d7f] transition-all hover:cursor-pointer outline-none focus:border-2",
            className
          )}
          maxLength={1}
          ref={ref}
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
