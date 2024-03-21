import { useTabList } from "@react-aria/tabs";
import { TabListState, useTabListState } from "@react-stately/tabs";
import {
  ForwardedRef,
  MutableRefObject,
  RefObject,
  useMemo,
  useRef,
} from "react";

export type ValuesType<T = object> = {
  state: TabListState<T>;
  listRef?: MutableRefObject<ForwardedRef<HTMLDivElement>>;
  classNames: {
    cursor: string;
  };
};

export function useTabs(props: any, ref: ForwardedRef<HTMLDivElement>) {
  const { classNames } = props;
  const domRef = useRef(ref);
  const state = useTabListState(props);

  const { tabListProps } = useTabList(
    props,
    state,
    domRef as RefObject<HTMLDivElement>
  );

  const values = useMemo<ValuesType>(
    () => ({
      state,
      listRef: domRef,
      classNames,
    }),
    [state, classNames]
  );

  return {
    state,
    tabListProps,
    values,
  };
}
