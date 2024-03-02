"use client";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface INotificationItem extends PropsWithChildren {
  avatar: string;
  name: string;
  time: string;
}

function NotificationItem({ name, avatar, time, children }: INotificationItem) {
  return (
    <motion.li
      className="w-full px-6 py-4 border-b border-[#303030] flex gap-4 hover:bg-[#3d3d3d66] transition-all hover:cursor-pointer"
      animate="enter"
      initial="initial"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          transform: "scale(0.8)",
        },
        enter: {
          opacity: 1,
          transform: "scale(1)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
        exit: {
          opacity: 0,
          transform: "scale(0.7)",
          transition: {
            type: "easeOut",
            bounce: 0,
            duration: 0.18,
          },
        },
      }}
    >
      <div className="relative">
        <Image
          src={avatar || ""}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 bg-red-500 rounded-full"
        />
        <div className="w-3.5 h-3.5 rounded-full absolute bg-blue-500 top-0" />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between flex-1">
          <p>{name}</p>
          <p className="text-[#848484] font-light">1 hour ago</p>
        </div>

        <div>
          <p className="text-[#848484]">
            Completed{" "}
            <span className="text-blue-500 hover:underline">
              Improve workflow in Figma
            </span>
          </p>
        </div>
      </div>
    </motion.li>
  );
}
export { NotificationItem };
