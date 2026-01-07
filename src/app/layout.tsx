"use client"

import * as React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ALLSideBar"
import { NavigationMenuDemo } from "@/components/ALLNavBar"
import { Footer } from "@/components/ALLFooter"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{ ["--sidebar-width" as any]: "180px" }}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          
          {/* Navbar */}
          <div
            className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 2rem",
              gap: "1rem",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            {/* Keep trigger and navbar aligned */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <SidebarTrigger />
            </div>
            <div style={{ flex: 1 }}>
              <NavigationMenuDemo />
            </div>
          </div>

          {/* Main page content */}
          <main style={{ flex: 1, padding: 0, margin: 0 }}>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  )
}
