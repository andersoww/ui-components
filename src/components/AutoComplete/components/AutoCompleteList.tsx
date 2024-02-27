"use client";

import { AutoCompleteItem } from "@/components/AutoComplete";
import { useAutoComplete } from "@/components/AutoComplete/components/AutoCompleteRoot";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useEffect,
  useMemo,
} from "react";

function AutoCompleteList({ children }: PropsWithChildren) {
  const { value, isOpen, onSelectionOnChange, setAux } = useAutoComplete();

  const dataElement = useMemo(
    () =>
      Children.toArray(children).filter((child) => {
        const { children, id, description } = (child as ReactElement).props;

        if (
          [description ? description : children][0]
            .toLowerCase()
            .includes(value.toLowerCase())
        ) {
          return {
            children,
            id,
          };
        }
      }),
    [children, value]
  ) as ReactElement[];

  useEffect(() => {
    setAux(dataElement);
  }, [dataElement, setAux]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          animate="enter"
          exit="exit"
          initial="initial"
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
          tabIndex={0}
          className={clsx(
            "scrollbar-hide absolute z-[60] mt-14 max-h-[150px] w-full overflow-y-auto rounded-lg border border-zinc-300 bg-zinc-50 p-2 shadow-lg"
          )}
        >
          <>
            {dataElement.length > 0 ? (
              <>
                {dataElement.map((child, index) => {
                  return cloneElement(child, {
                    index: index,
                    onClick: () => onSelectionOnChange(child.props),
                  });
                })}
              </>
            ) : (
              <AutoCompleteItem id="" index={0}>
                Nenhum resultado
              </AutoCompleteItem>
            )}
          </>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export { AutoCompleteList };
