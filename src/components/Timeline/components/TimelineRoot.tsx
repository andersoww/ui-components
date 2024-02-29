import { PropsWithChildren, ReactNode } from "react";

function TimelineRoot({
  children,
  className,
}: PropsWithChildren & { className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>;
}

export { TimelineRoot };
