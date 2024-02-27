"use client";

import { useAutoComplete } from "@/components/AutoComplete/components/AutoCompleteRoot";
import clsx from "clsx";

function ButtonDelete() {
  const { value, onChangeValue } = useAutoComplete();

  return (
    <button
      type="button"
      className={clsx("rounded-full p-1 transition-all hover:bg-zinc-300", {
        hidden: !value,
      })}
      onClick={() => {
        onChangeValue("");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x h-3 w-3 text-zinc-600"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}

export { ButtonDelete };
