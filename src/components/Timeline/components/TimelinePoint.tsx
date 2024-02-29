import clsx from "clsx";
import { PropsWithChildren } from "react";

function TimelinePoint({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <span
      className={clsx(
        "rounded-xl shadow-sm flex items-center justify-center bg-[#30363d] w-2 h-2 absolute -left-[4.5px]",

        className
      )}
    >
      {children}
    </span>
  );
}

export { TimelinePoint };
