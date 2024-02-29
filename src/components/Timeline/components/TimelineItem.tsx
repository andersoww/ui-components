import clsx from "clsx";
import { PropsWithChildren } from "react";

function TimelineItem({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <li
      className={clsx(
        "relative border-[#21262d] pb-4 border-l pl-6",
        className
      )}
    >
      {children}
    </li>
  );
}

export { TimelineItem };
