"use client"
import { useNavigate, useLocation } from "react-router-dom"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Top News", id: "top-news" },
  { name: "Global Affairs", id: "global-affairs" },
  { name: "Finance", id: "finance" },
  { name: "Science & Innovation", id: "science-&-innovation" },
  { name: "Culture & Lifestyle", id: "culture-&-lifestyle" },
  { name: "Travel & Exploration", id: "travel-&-exploration" },
]

export function NavigationMenuDemo() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (id: string) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id)
      section?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/", { state: { scrollTo: id } })
    }
  }

  return (
    <div className="flex items-center w-full px-6 py-4">
      
      {/* Logo */}
      <div
        className="mr-10 flex items-center gap-2 shrink-0 group cursor-pointer"
        onClick={() => handleNavigate("home")}
      >
        <div className="bg-black text-white px-3 py-1 font-serif font-black text-2xl tracking-tighter transition-colors group-hover:bg-[#01254a]">
          N
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-serif font-black text-xl tracking-tight uppercase">News</span>
          <span className="font-sans font-light text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Daily
          </span>
        </div>
      </div>

      {/* Categories */}
      <NavigationMenu className="max-w-none hidden lg:block">
        <NavigationMenuList className="flex gap-2">
          {categories.map((cat) => (
            <NavigationMenuItem key={cat.name}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <button
                  onClick={() => handleNavigate(cat.id)}
                  className="
                    font-bold text-[12px] uppercase tracking-widest whitespace-nowrap px-4
                    transition-colors rounded-md
                    hover:!bg-[#01254a] hover:!text-white
                  "
                >
                  {cat.name}
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Live */}
      <div className="ml-6 shrink-0">
        <Button
          variant="destructive"
          size="sm"
          className="h-7 rounded-full text-[10px] font-black uppercase tracking-tighter px-3 animate-pulse hover:animate-none"
          asChild
        >
          <button
            onClick={() => handleNavigate("live")}
          >
            <span className="mr-1 flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            Live
          </button>
        </Button>
      </div>
    </div>
  )
}
