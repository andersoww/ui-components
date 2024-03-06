"use client";
import clsx from "clsx";
import {
  ChangeEvent,
  Children,
  ClipboardEvent,
  KeyboardEvent,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useCallback,
  useRef,
  useState,
} from "react";

interface IOtpRoot extends PropsWithChildren {
  className?: string;
  handleSubmitOtp?: (value: string) => void;
}

export interface ExtendedKeyboardEvent<T> extends KeyboardEvent<T> {
  target: EventTarget & T;
}

function OtpRoot({ className, children, handleSubmitOtp }: IOtpRoot) {
  const otpBoxReference = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string[]>([]);

  const dataElement = Children.toArray(children) as ReactElement[];

  const onChangeOtp = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const { target } = e;

      e.target.value = e.target.value.replace(/[^0-9]/g, "");

      if (target.value) {
        console.log(target.value);
      }

      const aux = [...otp];

      aux[index] = target.value;

      setOtp(aux);

      handleSubmitOtp && handleSubmitOtp(aux.join().replaceAll(",", ""));

      if (target.value && index < otpBoxReference.current.length - 1) {
        otpBoxReference.current[index + 1]?.focus();
      }
    },
    [handleSubmitOtp, otp]
  );

  const onKeyUpChangeOtp = useCallback(
    (e: ExtendedKeyboardEvent<HTMLInputElement>, index: number) => {
      const { key, target } = e;

      if (key === "Backspace" && index > 0) {
        if (target.value === "") {
          otpBoxReference.current[index - 1]?.focus();
        }
      }
    },
    []
  );

  const onPasteOtp = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      const paste = e.clipboardData.getData("text");

      const validate = new RegExp(/[^0-9]/g).test(paste);

      if (!validate) {
        const pasteText = paste.split("");

        const aux = pasteText.map((val, index) => {
          if (otpBoxReference.current[index]) {
            otpBoxReference.current[index].value = val;
          }
        });

        handleSubmitOtp && handleSubmitOtp(aux.join().replaceAll(",", ""));
      }
    },
    [handleSubmitOtp]
  );

  return (
    <div className={clsx("flex gap-4", className)}>
      {dataElement.map((child, index) => {
        return cloneElement(child, {
          OtpRef: otpBoxReference.current,
          index,
          onKeyUpChangeOtp,
          onChangeOtp,
          onPasteOtp,
        });
      })}
    </div>
  );
}

export { OtpRoot };
