
import { Home, User, MessageSquare, Users, Search, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Explore", path: "/explore" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: Users, label: "Friends", path: "/friends" },
  { icon: User, label: "Profile", path: "/profile" }
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="hidden md:flex h-screen sticky top-0 flex-col py-4 pr-4 w-[240px]">
      <div className="flex flex-col space-y-2">
        {navigationItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <Button
              variant={location.pathname === item.path ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-base py-6",
                location.pathname === item.path 
                  ? "bg-gradient-to-r from-flair-purple-light to-flair-purple-dark text-white" 
                  : ""
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
      
      <div className="mt-auto">
        <Button 
          variant="outline" 
          className="w-full justify-center text-base py-6 border-2 border-flair-purple"
        >
          Create Post
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
