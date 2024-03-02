"use client";
import { useNotification } from "@/components/Notification/components/NotificationRoot";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface INotificationContainer extends PropsWithChildren {
  className?: string;
}

function NotificationContainer({
  children,
  className,
}: INotificationContainer) {
  const { isOpen } = useNotification();

  const animate: Variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          tabIndex={1}
          animate="enter"
          initial="initial"
          exit="exit"
          className="flex flex-col w-[446px] bg-[#212121] rounded-t-lg rounded-b-lg border-[#303030] border absolute -translate-x-[91%] mt-12"
          variants={animate}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { NotificationContainer };
