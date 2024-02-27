import clsx from "clsx";
import { ReactNode } from "react";

function AutoCompleteLabel({
  label,
  className,
  children,
  ...rest
}: {
  label?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <p
      className={clsx(
        "w-fit text-zinc-700 h-[17px] font-medium text-xs",
        className
      )}
      {...rest}
    >
      {label}
    </p>
  );
}

export { AutoCompleteLabel };
