"use client";
import { Notification } from "@/components/Notification";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [notifications, setNotifications] = useState<
    {
      name: string;
      avatar: string;
      time: string;
    }[]
  >([]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-[#121214]">
      <header className="h-[72px] w-full border-b flex items-center justify-end px-4 bg-[#1a1a1e] border-gray-700 mb-[72px]">
        <Notification.Root length={notifications.length}>
          <Notification.Toggle />

          <Notification.Container>
            <Notification.Header />
            <Notification.List>
              {notifications.map((item, index) => (
                <Notification.Item
                  key={index}
                  name={item.name}
                  avatar={item.avatar}
                  time={item.time}
                />
              ))}
            </Notification.List>
            <Notification.Footer className="flex justify-center">
              <button className="text-blue-500 hover:underline text-sm">
                View all
              </button>
            </Notification.Footer>
          </Notification.Container>
        </Notification.Root>
      </header>

      <button
        className="px-4 py-3 bg-purple-700 rounded-lg shadow-md flex gap-1 items-center"
        onClick={() => {
          setNotifications((state) => [
            ...state,
            {
              name: "Robert Fox",
              avatar:
                "https://images.unsplash.com/photo-1682685794761-c8e7b2347702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3NTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTI5OTQxNHw&ixlib=rb-4.0.3&q=80&w=400",
              time: "",
            },
          ]);
        }}
      >
        Notification <Plus className="w-5 h-5" />
      </button>
    </main>
  );
}
