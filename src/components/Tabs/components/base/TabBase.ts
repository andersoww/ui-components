import { ReactNode } from "react";
import { Item as BaseItem } from "@react-stately/collections";

interface TabBaseProps {
  title: ReactNode | null;
  children?: ReactNode | null;
  classNames?: object;
  disabled?: boolean
}

const TabBase = BaseItem as (props: TabBaseProps) => JSX.Element;

export { TabBase };
