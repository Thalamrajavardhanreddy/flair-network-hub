
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface ProfileHeaderProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isCurrentUser?: boolean;
  isFollowing?: boolean;
}

const ProfileHeader = ({
  name,
  username,
  avatar,
  bio,
  postsCount,
  followersCount,
  followingCount,
  isCurrentUser = false,
  isFollowing = false
}: ProfileHeaderProps) => {
  const [isFollowingState, setIsFollowingState] = useState(isFollowing);
  const [followers, setFollowers] = useState(followersCount);
  
  const handleFollowToggle = () => {
    if (isFollowingState) {
      setFollowers(prev => prev - 1);
    } else {
      setFollowers(prev => prev + 1);
    }
    setIsFollowingState(!isFollowingState);
  };
  
  return (
    <div className="border-b pb-4 mb-4">
      <div className="h-32 bg-gradient-to-r from-flair-purple-light to-flair-purple-dark rounded-t-xl" />
      
      <div className="px-4">
        <div className="relative flex justify-between items-start">
          <Avatar className="h-24 w-24 border-4 border-background -mt-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          
          {isCurrentUser ? (
            <Button variant="outline" className="mt-4">
              Edit Profile
            </Button>
          ) : (
            <Button 
              variant={isFollowingState ? "outline" : "default"}
              className={isFollowingState ? "border-flair-purple text-flair-purple mt-4" : "bg-flair-purple mt-4"}
              onClick={handleFollowToggle}
            >
              {isFollowingState ? "Following" : "Follow"}
            </Button>
          )}
        </div>
        
        <div className="mt-3">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-muted-foreground">@{username}</p>
          
          <p className="mt-3">{bio}</p>
          
          <div className="flex items-center space-x-4 mt-4">
            <div>
              <span className="font-bold">{postsCount}</span>{" "}
              <span className="text-muted-foreground">Posts</span>
            </div>
            <div>
              <span className="font-bold">{followers}</span>{" "}
              <span className="text-muted-foreground">Followers</span>
            </div>
            <div>
              <span className="font-bold">{followingCount}</span>{" "}
              <span className="text-muted-foreground">Following</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <Tabs defaultValue="posts">
          <TabsList className="w-full">
            <TabsTrigger value="posts" className="flex-1">
              Posts
            </TabsTrigger>
            <TabsTrigger value="media" className="flex-1">
              Media
            </TabsTrigger>
            <TabsTrigger value="likes" className="flex-1">
              Likes
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileHeader;
