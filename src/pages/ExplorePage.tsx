
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Post, { PostProps } from "@/components/feed/Post";
import TrendingTopics from "@/components/suggestions/TrendingTopics";

// Mock data
const explorePostsData: PostProps[] = [
  {
    id: "7",
    author: {
      id: "8",
      name: "Sophia Kim",
      username: "sophiak",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    content: "Just hiked to the top of Mount Rainier! What an incredible view from the summit. #hiking #adventure",
    image: "https://i.pravatar.cc/1080?img=32",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    likes: 205,
    comments: 27,
    isLiked: false
  },
  {
    id: "8",
    author: {
      id: "9",
      name: "David Wilson",
      username: "davidw",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    content: "My latest artwork inspired by cyberpunk aesthetics. Created using digital painting techniques. #digitalart #cyberpunk",
    image: "https://i.pravatar.cc/1080?img=33",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    likes: 432,
    comments: 56,
    isLiked: false
  },
  {
    id: "9",
    author: {
      id: "10",
      name: "Olivia Martinez",
      username: "oliviam",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    content: "Just released my new tech tutorial series on building modern web applications! Check it out at the link in my bio. #webdev #tutorials",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    likes: 187,
    comments: 42,
    isLiked: false
  }
];

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search people, topics, or keywords"
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="for-you">
        <TabsList className="w-full">
          <TabsTrigger value="for-you" className="flex-1">
            For You
          </TabsTrigger>
          <TabsTrigger value="trending" className="flex-1">
            Trending
          </TabsTrigger>
          <TabsTrigger value="latest" className="flex-1">
            Latest
          </TabsTrigger>
        </TabsList>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <TabsContent value="for-you" className="space-y-4 mt-0">
              {explorePostsData.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </TabsContent>
            
            <TabsContent value="trending" className="space-y-4 mt-0">
              {explorePostsData
                .sort((a, b) => b.likes - a.likes)
                .map((post) => (
                  <Post key={post.id} {...post} />
                ))}
            </TabsContent>
            
            <TabsContent value="latest" className="space-y-4 mt-0">
              {explorePostsData
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map((post) => (
                  <Post key={post.id} {...post} />
                ))}
            </TabsContent>
          </div>
          
          <div className="hidden md:block">
            <TrendingTopics />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ExplorePage;
