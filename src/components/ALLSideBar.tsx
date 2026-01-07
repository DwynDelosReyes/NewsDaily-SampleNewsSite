"use client"
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Globe,
  Briefcase,
  Cpu,
  Atom,
  Heart,
  Film,
  Smile,
  ChartCandlestick,
  Building,
  ChartNoAxesCombined,
  ChartPie,
  Landmark,
  MapPin,
  MapPinned,
  Medal,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const sidebarGroups = [
  {
    label: "Main",
    children: [{ title: "Home", url: "/", scrollId: "home", icon: Home }],
  },
  {
    label: "Global Affairs",
    children: [
      { title: "World", url: "/global-affairs", scrollId: "World News", icon: Globe },
      { title: "Politics", url: "/global-affairs", scrollId: "Political News", icon: Landmark },
      { title: "Business", url: "/global-affairs", scrollId: "Business News", icon: Building },
    ],
  },
  {
    label: "Finance",
    children: [
      { title: "Markets", url: "/finance", scrollId: "Market News", icon: ChartNoAxesCombined },
      { title: "Economy", url: "/finance", scrollId: "Economic News", icon: ChartPie },
      { title: "Investing", url: "/finance", scrollId: "Investing News", icon: ChartCandlestick },
    ],
  },
  {
    label: "Science & Innovation",
    children: [
      { title: "Technology", url: "/scienceinnovation", scrollId: "Technology News", icon: Cpu },
      { title: "Science", url: "/scienceinnovation", scrollId: "Science News", icon: Atom },
      { title: "Health", url: "/scienceinnovation", scrollId: "Health News", icon: Heart },
    ],
  },
  {
    label: "Culture & Lifestyle",
    children: [
      { title: "Sports", url: "/culturelifetyle", scrollId: "Sports News", icon: Medal },
      { title: "Entertainment", url: "/culturelifetyle", scrollId: "Entertainment News", icon: Film },
      { title: "Lifestyle", url: "/culturelifetyle", scrollId: "Lifestyle News", icon: Smile },
    ],
  },
  {
    label: "Travel & Exploration",
    children: [
      { title: "Destinations", url: "/travelexploration", scrollId: "Destinations to Visit", icon: MapPin },
      { title: "Guides", url: "/travelexploration", scrollId: "Exploring Guides", icon: MapPinned },
      { title: "Tips", url: "/travelexploration", scrollId: "Travelling Tips", icon: Briefcase },
    ],
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section if state.scrollTo exists
  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const section = document.getElementById(scrollToId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleClick = (item: { url: string; scrollId?: string }) => {
    if (location.pathname === item.url && item.scrollId) {
      // Already on page → scroll
      const section = document.getElementById(item.scrollId);
      section?.scrollIntoView({ behavior: "smooth" });
    } else if (item.scrollId) {
      // Navigate with state
      navigate(item.url, { state: { scrollTo: item.scrollId } });
    } else {
      navigate(item.url);
    }
  };

  return (
    <Sidebar style={{ width: "180px", minWidth: "180px", maxWidth: "180px", margin: 0, padding: 0 }}>
      <SidebarContent
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#e5e7eba1 transparent',
          msOverflowStyle: 'none',
        }}
        className="[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:bg-transparent"
      >
        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.label} className="mb-1">
            <SidebarGroupLabel className="mb-1 font-bold">{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.children.map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-0">
                    <SidebarMenuButton asChild>
                      <button
                        onClick={() => handleClick(item)}
                        className="flex items-center gap-2 font-normal text-[12px] tracking-widest whitespace-nowrap px-2"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <br />
    </Sidebar>
  );
}
