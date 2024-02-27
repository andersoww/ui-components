"use client";
import clsx from "clsx";
import {
  FocusEvent,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

interface IAutoComplete {
  isOpen: boolean;
  focusedIndex: number;
  children?: ReactNode;
  value: string;
  aux: ReactElement[];
  eventChangeAutoComplete: (value: boolean) => void;
  onChangeValue: (value: string) => void;
  onSelectionOnChange: (value: any) => void;
  setAux: (value: ReactElement[]) => void;
  setFocusedIndex: (value: number) => void;
}

interface MouseEventProps extends MouseEvent {
  target: EventTarget & {
    id?: string;
  };
}

const AutoCompleteContext = createContext({} as IAutoComplete);

const AutoCompleteRoot = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [aux, setAux] = useState<ReactElement[]>([]);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const eventChangeAutoComplete = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const onChangeValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  const onSelectionOnChange = useCallback(
    (e: any) => {
      const { description, children } = e;

      eventChangeAutoComplete(false);
      onChangeValue(description ? description : children);
    },
    [eventChangeAutoComplete, onChangeValue]
  );

  const onOpenContainer = useCallback(
    (e: MouseEventProps) => {
      const item = document.getElementById("item-autocomplete");

      const input = componentRef.current?.children[0]?.children[0]
        ?.children[1] as any;

      if (e.target.id !== item?.id && !isOpen) {
        input?.focus();
        eventChangeAutoComplete(true);
      }
    },
    [eventChangeAutoComplete, isOpen]
  );

  const escapeContainer = useCallback(
    (e: FocusEvent) => {
      const { relatedTarget } = e;

      if (!componentRef.current?.contains(relatedTarget)) {
        eventChangeAutoComplete(false);
      }
    },
    [eventChangeAutoComplete]
  );

  return (
    <AutoCompleteContext.Provider
      value={{
        isOpen,
        focusedIndex,
        value,
        aux,
        onSelectionOnChange,
        eventChangeAutoComplete,
        onChangeValue,
        setAux,
        setFocusedIndex,
      }}
    >
      <div
        ref={componentRef}
        className={clsx("relative flex w-full h-fit flex-col", className)}
        onBlur={escapeContainer}
        onClick={onOpenContainer}
      >
        {children}
      </div>
    </AutoCompleteContext.Provider>
  );
};

const useAutoComplete = () => {
  const context = useContext(AutoCompleteContext);

  return context;
};

export { AutoCompleteRoot, useAutoComplete };
