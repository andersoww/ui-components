import clsx from "clsx";
import { PropsWithChildren } from "react";

interface INotificationFooter extends PropsWithChildren {
  className?: string;
}

function NotificationFooter({ className, children }: INotificationFooter) {
  return (
    <footer
      className={clsx(
        "w-full px-6 py-4 border-t border-[#303030] rounded-b-lg hover:bg-[#3d3d3d66] transition-all hover:cursor-pointer",
        className
      )}
    >
      {children}
    </footer>
  );
}

export { NotificationFooter };
