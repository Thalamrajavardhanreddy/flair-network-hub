
import { Home, Search, User, Bell, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, path: "/" },
  { icon: Search, path: "/explore" },
  { icon: Bell, path: "/notifications" },
  { icon: MessageSquare, path: "/messages" },
  { icon: User, path: "/profile" }
];

const MobileNavbar = () => {
  const location = useLocation();
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-50 h-16 px-2">
      <div className="flex items-center justify-between h-full">
        {navigationItems.map((item) => (
          <Link to={item.path} key={item.path} className="flex-1">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-full h-full rounded-none",
                location.pathname === item.path 
                  ? "text-flair-purple-dark" 
                  : "text-muted-foreground"
              )}
            >
              <item.icon className={cn(
                "h-6 w-6", 
                location.pathname === item.path ? "fill-flair-purple-light stroke-flair-purple-dark" : ""
              )} />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
