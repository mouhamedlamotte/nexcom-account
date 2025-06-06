"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/lib/nexcom/auth/auth-context";

export default function Page() {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 lg:hidden" />
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center gap-6">
          hello, {user?.email}
            <a className="text-blue-500 hover:text-blue-600" href="http://localhost:3000/logout">Logout</a>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
