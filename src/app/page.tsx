"use client";
import { Notification } from "@/components/Notification";
import { notificationRandom } from "@/components/Notification/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [notifications, setNotifications] = useState<
    {
      name: string;
      avatar: string;
      message: string;
      time: string;
    }[]
  >([]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-[#121214]">
      <header className="h-[72px] w-full border-b flex items-center justify-between px-4 bg-[#1a1a1e] border-gray-700 mb-[72px]">
        <h1 className="text-2xl">Logo</h1>

        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/68248272?v=4"
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 rounded-full"
          />

          <Notification.Root length={notifications.length}>
            <Notification.Toggle />

            <Notification.Container>
              <Notification.Header />
              <Notification.List>
                {notifications.map((item, index) => (
                  <Notification.Item
                    key={index}
                    name={item.name}
                    message={item.message}
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
        </div>
      </header>

      <button
        className="p-2 bg-purple-700 rounded-lg shadow-md flex gap-1 items-center"
        onClick={() => {
          setNotifications((state) => [...state, notificationRandom()]);
        }}
      >
        Notification <Plus className="w-5 h-5" />
      </button>
    </main>
  );
}
