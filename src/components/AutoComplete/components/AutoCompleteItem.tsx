"use client";

import { useAutoComplete } from "@/components/AutoComplete/components/AutoCompleteRoot";
import clsx from "clsx";
import { ReactNode, forwardRef, useEffect, useRef } from "react";

const AutoCompleteItem = forwardRef<
  HTMLInputElement,
  {
    id: string;
    children: ReactNode;
    onClick?: () => void;
    index: number;
    description?: string;
  }
>(({ id, children, onClick, index, ...rest }, ref) => {
  const resultContainer = useRef<HTMLDivElement>(null);
  const { focusedIndex } = useAutoComplete();

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  return (
    <div
      ref={index === focusedIndex ? resultContainer : ref}
      id="item-autocomplete"
      onClick={onClick}
      className={clsx(
        "cursor-pointer rounded-lg p-2 text-sm hover:bg-zinc-200 text-zinc-600",
        {
          "rounded-lg bg-zinc-200": index === focusedIndex,
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

AutoCompleteItem.displayName = "AutoCompleteItem";

export { AutoCompleteItem };
