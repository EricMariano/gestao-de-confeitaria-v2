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

import { NavDocuments } from "@/components/global/sidebar/s-side-documents"
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
    firstName: "Joelma",
    secondName: "Mariano",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Lista de Receitas",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Lista de Ingredientes",
      url: "#",
      icon: IconListDetails,
    },
  ],
  navSecondary: [
    {
      title: "Ajustes",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
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
        {/* <NavDocuments items={data.documents} /> */}
        <SidebarMenuSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <p className="text-[12px]">Desenvolvido por 
          <span className="hover:underline hover:bg-gradient-to-r hover:from-[#050F2C] hover:via-blue-600 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"> 
            <Link href="https://github.com/EricMariano" about="_blank"> @EricMariano</Link>
          </span>
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}
