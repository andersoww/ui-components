"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  FocusEvent,
  Children,
} from "react";

interface INotificationRoot extends PropsWithChildren {
  length: number;
}

interface INotificationContext {
  isOpen: boolean;
  count: number;
  onChangeOpen: (value: boolean) => void;
}

const NotificationContext = createContext<INotificationContext>(
  {} as INotificationContext
);

function NotificationRoot({ children, length }: INotificationRoot) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const onChangeOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const escapeContainer = useCallback((e: FocusEvent) => {
    const { relatedTarget } = e;

    if (!componentRef.current?.contains(relatedTarget)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    setCount(length);
  }, [length]);

  return (
    <NotificationContext.Provider value={{ isOpen, count, onChangeOpen }}>
      <div
        tabIndex={0}
        ref={componentRef}
        className="relative flex"
        onBlur={escapeContainer}
      >
        {children}
      </div>
    </NotificationContext.Provider>
  );
}

const useNotification = () => {
  const context = useContext(NotificationContext);

  return context;
};

export { NotificationRoot, useNotification };
