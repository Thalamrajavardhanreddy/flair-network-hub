
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

interface NotificationProps {
  id: string;
  type: "like" | "comment" | "follow" | "mention";
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  postId?: string;
  createdAt: string;
  isRead: boolean;
}

const notifications: NotificationProps[] = [
  {
    id: "1",
    type: "like",
    user: {
      id: "1",
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "liked your post",
    postId: "1",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    isRead: false
  },
  {
    id: "2",
    type: "comment",
    user: {
      id: "3",
      name: "Jordan Taylor",
      username: "jordant",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    content: "commented on your post: \"Great work! This looks amazing!\"",
    postId: "1",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    isRead: false
  },
  {
    id: "3",
    type: "follow",
    user: {
      id: "4",
      name: "Mia Wong",
      username: "miaw",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    content: "started following you",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    isRead: true
  },
  {
    id: "4",
    type: "mention",
    user: {
      id: "2",
      name: "Alex Chen",
      username: "alexc",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "mentioned you in a comment: \"@username This reminds me of your project!\"",
    postId: "5",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    isRead: true
  },
  {
    id: "5",
    type: "like",
    user: {
      id: "8",
      name: "Sophia Kim",
      username: "sophiak",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    content: "liked your comment",
    postId: "3",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    isRead: true
  }
];

const Notification = ({ user, content, createdAt, isRead, type }: NotificationProps) => {
  return (
    <div className={`p-4 hover:bg-accent rounded-lg transition-colors ${!isRead ? "bg-flair-purple/5" : ""}`}>
      <div className="flex items-start space-x-3">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <p className="text-sm">
            <span className="font-medium">{user.name}</span> {content}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
        </div>
        
        {!isRead && (
          <div className="h-2 w-2 rounded-full bg-flair-purple" />
        )}
      </div>
    </div>
  );
};

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const allNotifications = notifications;
  const unreadNotifications = notifications.filter((notification) => !notification.isRead);
  
  const filteredNotifications = activeTab === "all" ? allNotifications : unreadNotifications;
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="w-full mb-6">
          <TabsTrigger value="all" className="flex-1">
            All
          </TabsTrigger>
          <TabsTrigger value="unread" className="flex-1">
            Unread
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-2 mt-0">
          {filteredNotifications.map((notification) => (
            <Notification key={notification.id} {...notification} />
          ))}
        </TabsContent>
        
        <TabsContent value="unread" className="space-y-2 mt-0">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <Notification key={notification.id} {...notification} />
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No unread notifications
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationsPage;
