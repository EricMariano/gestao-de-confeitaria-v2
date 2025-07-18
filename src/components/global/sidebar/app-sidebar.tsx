"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDatabase,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

import { SidebarMenuMain } from "@/components/global/sidebar/s-sidebar-main"
import { SidebarMenuSecondary } from "@/components/global/sidebar/s-sidebar-secondary"
import { NavUser } from "@/components/global/sidebar/s-sidebar-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import Link from "next/link"

const data = {
  user: {
    firstName: "Eric",
    secondName: "Mariano",
    email: "ericbfmariano@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconChartBar,
    },
    {
      title: "Lista de Receitas",
      url: "/recipes",
      icon: IconFolder,
    },
    {
      title: "Lista de Ingredientes",
      url: "/ingredients",
      icon: IconListDetails,
    },
  ],
  navSecondary: [
    {
      title: "Ajustes",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Ajuda",
      url: "/help",
      icon: IconHelp,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuMain items={data.navMain} />
        <SidebarMenuSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <p className="text-[12px]">Desenvolvido por {""} 
          <span className="hover:bg-gradient-to-r hover:from-[#590D22] hover:via-[#FF4D6D] hover:to-[#590D22] hover:text-transparent hover:bg-clip-text"> 
            <Link href="https://github.com/EricMariano" target="_blank">@EricMariano</Link>
          </span>
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}
