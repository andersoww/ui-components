import clsx from "clsx";
import { PropsWithChildren } from "react";

interface INotificationHeader extends PropsWithChildren {
  className?: string;
}

function NotificationHeader({ children, className }: INotificationHeader) {
  return (
    <header
      className={clsx(
        "bg-[#292929] flex items-center justify-between p-6 rounded-t-lg shadow-sm border-b border-[#303030]",
        className
      )}
    >
      <h1 className="font-semibold">Notifications</h1>
      <p className="text-sm text-blue-500 hover:underline hover:cursor-pointer">
        Mark all as read
      </p>
      {children}
    </header>
  );
}

export { NotificationHeader };
