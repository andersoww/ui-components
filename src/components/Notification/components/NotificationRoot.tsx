"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
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

  const onChangeOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  useEffect(() => {
    setCount(length);
  }, [length]);

  return (
    <NotificationContext.Provider value={{ isOpen, count, onChangeOpen }}>
      <div className="retive">{children}</div>
    </NotificationContext.Provider>
  );
}

const useNotification = () => {
  const context = useContext(NotificationContext);

  return context;
};

export { NotificationRoot, useNotification };
