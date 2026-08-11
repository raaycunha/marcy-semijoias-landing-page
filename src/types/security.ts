import type { IconType } from "react-icons";

export interface SecurityItem {
  id: number;
  message: string;
  icon: IconType;
  iconClassName?: string;
}
