"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpenText,
  Bot,
  Church,
  Command,
  GalleryVerticalEnd,
  House,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "East Radford",
      logo: GalleryVerticalEnd,
      plan: "Church",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House
    },
    {
      title: "Services",
      url: "/dashboard/",
      icon: Church
    },
    {
      title: "Sermons",
      url: "/dashboard/",
      icon: BookOpenText
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: SquareTerminal
    },
    {
      title: "Invoices",
      url: "/dashboard/invoices",
      icon: Bot
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
