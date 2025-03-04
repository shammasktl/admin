import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const SidebarSection = () => {
  return (
    <SidebarProvider className="bg-transparent">
      <Sidebar className="bg-transparent fixed">
        <SidebarContent className="bg-red-500 rounded-r-xl border-none">
          <SidebarGroup>
            <SidebarGroupLabel className="font-semibold p-5 text-3xl text-white">Thelicham</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="my-16 flex flex-col gap-3.5">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild className="hover:bg-red-400 transition-colors duration-500">
                      <a href={item.url}>
                        <item.icon color="#fff" size={32}/>
                        <span className="text-white text-xl font-normal">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default SidebarSection;
