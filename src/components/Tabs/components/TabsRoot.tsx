"use client";

import { ClientOnly } from "@/components/ClientOnly";
import { Tab } from "@/components/Tabs/components/Tab";
import TabPanel from "@/components/Tabs/components/TabPanel";
import { useTabs } from "@/components/Tabs/hook/useTabs";
import { ForwardedRef, LegacyRef, PropsWithChildren, forwardRef } from "react";

interface TabsRootProps extends PropsWithChildren {
  classNames: {
    cursor: string;
  };
}

function TabsRoot(props: TabsRootProps, ref: ForwardedRef<HTMLDivElement>) {
  const { state, tabListProps, values } = useTabs(props, ref);

  const TabsProps = {
    state,
    listRef: values.listRef,
    classNames: values.classNames,
  };

  const tabs = [...(state.collection as any)].map((item) => (
    <Tab key={item.key} item={item} {...TabsProps} {...item.props} />
  ));

  return (
    <div className="relative flex w-full flex-auto flex-col overflow-hidden h-fit mt-2">
      <div data-slot="base" className="inline-flex w-full">
        <div
          className="flex gap-6 border-b w-full border-[#3c3c3c]"
          ref={values.listRef as LegacyRef<HTMLDivElement>}
          {...tabListProps}
        >
          {tabs}
        </div>
      </div>
      <ClientOnly
        fallback={
          <div className="w-full h-[400px] bg-[#353535] rounded-lg animate-pulse mt-3" />
        }
      >
        <TabPanel key={state.selectedItem?.key} state={state} />
      </ClientOnly>
    </div>
  );
}

export default forwardRef(TabsRoot);

TabsRoot.displayName = "TabRoot.Root";
