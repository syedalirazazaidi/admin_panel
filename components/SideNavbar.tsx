"use client";
import React from "react";
import { Nav } from "./ui/nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
type Props = {};

export default function SideNavbar({}: Props) {
  return (
    <div>
      <Nav
        isCollapsed={false}
        links={[
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            variant: "default",
            href: "/",
          },
          {
            title: "Drafts",
            label: "9",
            icon: File,
            variant: "ghost",
            href: "/",
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
            href: "/",
          },
          {
            title: "Junk",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
            href: "/",
          },
          {
            title: "Trash",
            label: "",
            icon: Trash2,
            variant: "ghost",
            href: "/",
          },
          {
            title: "Archive",
            label: "",
            icon: Archive,
            variant: "ghost",
            href: "/archive",
          },
        ]}
      />
    </div>
  );
}
