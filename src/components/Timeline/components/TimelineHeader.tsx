import clsx from "clsx";
import { PropsWithChildren } from "react";

function TimelineHeader({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <header className="w-full">
      <div
        className={clsx("flex w-full justify-between items-center", className)}
      >
        {children}
      </div>
    </header>
  );
}

export { TimelineHeader };
