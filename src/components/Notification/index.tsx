import { NotificationRoot } from "@/components/Notification/components/NotificationRoot";
import { NotificationFooter } from "@/components/Notification/components/NotificationFooter";
import { NotificationHeader } from "@/components/Notification/components/NotificationHeader";
import { NotificationItem } from "@/components/Notification/components/NotificationItem";
import { NotificationList } from "@/components/Notification/components/NotificationList";
import { NotificationContainer } from "@/components/Notification/components/NotificationContainer";
import { NotificationToggle } from "@/components/Notification/components/NotificationToggle";

export const Notification = {
  Root: NotificationRoot,
  Toggle: NotificationToggle,
  Container: NotificationContainer,
  Header: NotificationHeader,
  List: NotificationList,
  Item: NotificationItem,
  Footer: NotificationFooter,
};
