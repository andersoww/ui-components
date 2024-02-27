"use client";

import { useAutoComplete } from "@/components/AutoComplete/components/AutoCompleteRoot";
import clsx from "clsx";

function AutoCompleteButton() {
  const { isOpen, eventChangeAutoComplete } = useAutoComplete();

  return (
    <button
      type="button"
      id="button-autocomplete"
      className="flex cursor-pointer items-center justify-center rounded-lg border p-1 bg-zinc-300 shadow-sm"
      onClick={() => {
        if (isOpen) {
          eventChangeAutoComplete(false);
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx(
          "h-4 w-4 duration-200 lucide lucide-chevron-down text-zinc-600",
          {
            "rotate-180": isOpen,
          }
        )}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

export { AutoCompleteButton };
