
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SuggestedUserProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends?: number;
}

const suggestedUsers: SuggestedUserProps[] = [
  {
    id: "5",
    name: "Elena Rivera",
    username: "elenar",
    avatar: "https://i.pravatar.cc/150?img=10",
    mutualFriends: 4
  },
  {
    id: "6",
    name: "Marcus Lee",
    username: "marcusl",
    avatar: "https://i.pravatar.cc/150?img=11",
    mutualFriends: 2
  },
  {
    id: "7",
    name: "Tanya Patel",
    username: "tanyap",
    avatar: "https://i.pravatar.cc/150?img=12",
    mutualFriends: 7
  }
];

const SuggestedUser = ({ id, name, username, avatar, mutualFriends }: SuggestedUserProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  const toggleFollow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFollowing(!isFollowing);
  };
  
  return (
    <Link to={`/profile/${id}`} className="flex items-center justify-between p-3 hover-effect">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">
            @{username}
            {mutualFriends && mutualFriends > 0 && (
              <span> · {mutualFriends} mutual friends</span>
            )}
          </p>
        </div>
      </div>
      <Button 
        size="sm" 
        variant={isFollowing ? "outline" : "default"}
        className={isFollowing ? "border-flair-purple text-flair-purple" : "bg-flair-purple"}
        onClick={toggleFollow}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Link>
  );
};

const SuggestedUsers = () => {
  return (
    <div className="bg-card rounded-xl border border-border">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Suggested for you</h3>
      </div>
      <div className="divide-y">
        {suggestedUsers.map((user) => (
          <SuggestedUser key={user.id} {...user} />
        ))}
      </div>
      <div className="p-4">
        <Button variant="link" className="text-flair-purple w-full">
          See more
        </Button>
      </div>
    </div>
  );
};

export default SuggestedUsers;
