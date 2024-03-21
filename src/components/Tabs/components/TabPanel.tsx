import { useTabPanel } from "@react-aria/tabs";
import { TabListState } from "@react-stately/tabs";
import { ForwardedRef, RefObject, forwardRef } from "react";

interface TabPanelProps {
  state: TabListState<object>;
}

function TabPanel(props: TabPanelProps, ref: ForwardedRef<HTMLDivElement>) {
  const { state } = props;
  const { tabPanelProps } = useTabPanel({}, state, ref as RefObject<Element>);

  const selectedItem = state.selectedItem;

  const content = selectedItem?.props?.children;

  if (!content) {
    return null;
  }

  return (
    <div {...tabPanelProps} ref={ref} className="py-3 px-2">
      {content}
    </div>
  );
}

export default forwardRef(TabPanel);

TabPanel.displayName = "Tab.TabPanel";
