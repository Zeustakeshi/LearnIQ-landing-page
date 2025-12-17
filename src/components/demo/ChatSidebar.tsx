"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  BookOpen,
  MessageCircle,
  Plus,
} from "lucide-react";

interface ChatItem {
  id: string;
  title: string;
}

interface ChatSidebarProps {
  chatHistory: ChatItem[];
  onNewChat: () => void;
  currentChat?: string;
}

export function ChatSidebar({ chatHistory, onNewChat, currentChat }: ChatSidebarProps) {
  const { user } = useUser();

  return (
    <Sidebar collapsible="icon" className="border-r border-[var(--color-border)]">
      {/* Header with Logo */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              size="lg" 
              className="cursor-default hover:bg-transparent"
              tooltip="LearnIQ"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[var(--color-text)]">LearnIQ</span>
                <span className="text-xs text-[var(--color-text-muted)]">Bạn học ảo</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent>
        {/* New Chat Button */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={onNewChat}
                  tooltip="Cuộc trò chuyện mới"
                  className="bg-[var(--color-card-bg)] hover:bg-white border border-[var(--color-border)] cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cuộc trò chuyện mới</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Chat History */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-[var(--color-text-muted)] group-data-[collapsible=icon]:hidden">
            Gần đây
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.length > 0 ? (
                chatHistory.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton 
                      isActive={currentChat === chat.id}
                      tooltip={chat.title}
                      className="cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[var(--color-text-muted)]" />
                      <span className="truncate">{chat.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                <p className="text-sm text-[var(--color-text-muted)] italic px-2 py-1 group-data-[collapsible=icon]:hidden">
                  Chưa có cuộc trò chuyện nào
                </p>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer with User */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              size="lg" 
              className="cursor-default hover:bg-transparent"
              tooltip={user?.firstName || "Học sinh"}
            >
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  }
                }}
              />
              <div className="flex flex-col flex-1 min-w-0">
                <span className="font-medium text-[var(--color-text)] truncate">
                  {user?.firstName || "Học sinh"}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">Demo</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
