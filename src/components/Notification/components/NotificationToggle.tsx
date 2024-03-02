"use client";
import { useNotification } from "@/components/Notification/components/NotificationRoot";
import { Bell } from "lucide-react";

interface INotificationToggle {
  className?: string;
}

function NotificationToggle({ className }: INotificationToggle) {
  const { onChangeOpen, isOpen, count } = useNotification();
  return (
    <button
      onClick={() => {
        if (isOpen) {
          onChangeOpen(false);
        } else onChangeOpen(true);
      }}
      className={className}
    >
      <div className="relative p-2 rounded-lg border bg-[#212121] border-[#303030]">
        <Bell className="text-zinc-300 w-5 h-5" />

        {count > 0 && (
          <div className="text-[10px] absolute top-1 right-1.5 bg-blue-500 rounded-full w-3.5 h-3.5 flex justify-center items-center">
            {count}
          </div>
        )}
      </div>
    </button>
  );
}

export { NotificationToggle };
