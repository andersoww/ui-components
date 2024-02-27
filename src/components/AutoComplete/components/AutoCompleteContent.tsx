import { AutoCompleteButton } from "@/components/AutoComplete/components/AutoCompleteButton";
import { ButtonDelete } from "@/components/AutoComplete/components/AutoCompleteDelete";
import clsx from "clsx";
import { PropsWithChildren } from "react";

function AutoCompleteContent({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={clsx(
        "flex h-14 w-full px-3 py-2 rounded-xl border-2 bg-zinc-100 gap-3 items-center hover:border-blue-500 transition-all",
        className
      )}
    >
      <div className="flex flex-col w-full">{children}</div>

      <ButtonDelete />
      <AutoCompleteButton />
    </div>
  );
}

export { AutoCompleteContent };
