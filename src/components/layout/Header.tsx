
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center justify-between w-full gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-flair-purple-light to-flair-purple-dark bg-clip-text text-transparent">
              Flair
            </span>
          </Link>
          
          <div className="hidden md:flex relative max-w-sm flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-muted/30"
            />
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="btn-icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="btn-icon">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              asChild 
              size="sm" 
              className="hidden md:flex bg-gradient-to-r from-flair-purple-light to-flair-purple-dark text-white"
            >
              <Link to="/auth">
                Sign In
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
