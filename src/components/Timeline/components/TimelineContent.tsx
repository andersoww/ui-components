import { PropsWithChildren } from "react";

function TimelineContent({ children }: PropsWithChildren) {
  return (
    <ol className="overflow-auto max-h-[300px] h-full p-4 flex flex-col">
      {children}
    </ol>
  );
}

export { TimelineContent };
