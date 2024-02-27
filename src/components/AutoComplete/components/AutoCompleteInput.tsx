"use client";

import { useAutoComplete } from "@/components/AutoComplete/components/AutoCompleteRoot";
import clsx from "clsx";
import {
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  KeyboardEvent,
} from "react";

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const AutoCompleteInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  ({ className, disabled, placeholder, onChange, onClick }, ref) => {
    const {
      eventChangeAutoComplete,
      onChangeValue,
      setFocusedIndex,
      onSelectionOnChange,
      value,
      focusedIndex,
      aux,
    } = useAutoComplete();

    const onKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        const { key } = event;

        if (key === "ArrowUp") {
          return setFocusedIndex((focusedIndex + aux.length - 1) % aux.length);
        }

        if (key === "ArrowDown") {
          return setFocusedIndex((focusedIndex + 1) % aux.length);
        }

        if (key === "Enter") {
          event.preventDefault();
          if (aux[focusedIndex]?.props) {
            return onSelectionOnChange(aux[focusedIndex]?.props);
          }
        }

        if (key === "Escape") {
          eventChangeAutoComplete(false);
        }
      },
      [
        aux,
        focusedIndex,
        eventChangeAutoComplete,
        onSelectionOnChange,
        setFocusedIndex,
      ]
    );

    return (
      <input
        autoComplete="off"
        id="input"
        ref={ref}
        className={clsx(
          "w-full bg-transparent focus:outline-none text-sm h-fit placeholder:text-zinc-500 text-zinc-700",
          className
        )}
        onClick={onClick}
        onChange={(e) => {
          setFocusedIndex(0);
          eventChangeAutoComplete(true);
          onChangeValue(e.currentTarget.value);
          if (!e.currentTarget.value) {
            eventChangeAutoComplete(false);
          }

          onChange && onChange(e);
        }}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    );
  }
);

AutoCompleteInput.displayName = "Input";

export { AutoCompleteInput };
