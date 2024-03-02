"use client";
import { useNotification } from "@/components/Notification/components/NotificationRoot";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { BellOff } from "lucide-react";
import { Children, PropsWithChildren, useEffect } from "react";

interface INotificationContainer extends PropsWithChildren {
  className?: string;
}

function NotificationList({ className, children }: INotificationContainer) {
  return (
    <AnimatePresence initial={false}>
      <ul
        className={clsx(
          "flex flex-col w-full h-auto max-h-[calc(100vh-220px)] overflow-hidden overflow-y-scroll min-h-[300px] relative",
          className
        )}
      >
        {Children.toArray(children).length > 0 ? (
          children
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <BellOff className="w-14 h-14" />

            <div>
              <h2 className="text-lg text-center font-semibold">
                No Notification
              </h2>
              <p className="text-sm text-center text-blue-500">
                You don`t have notification
              </p>
            </div>
          </div>
        )}
      </ul>
    </AnimatePresence>
  );
}

export { NotificationList };
