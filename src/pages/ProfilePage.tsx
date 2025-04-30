
import ProfileHeader from "@/components/profile/ProfileHeader";
import Post, { PostProps } from "@/components/feed/Post";

// Mock data
const profileData = {
  id: "2",
  name: "Alex Chen",
  username: "alexc",
  avatar: "https://i.pravatar.cc/150?img=3",
  bio: "Photographer, traveler, and food enthusiast. Always looking for the next adventure.",
  postsCount: 42,
  followersCount: 1205,
  followingCount: 360,
  isCurrentUser: false,
  isFollowing: true
};

const posts: PostProps[] = [
  {
    id: "2",
    author: {
      id: "2",
      name: "Alex Chen",
      username: "alexc",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Amazing sunset at the beach today. Nature is truly breathtaking! 🌅",
    image: "https://i.pravatar.cc/1080?img=27",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    likes: 142,
    comments: 12,
    isLiked: true
  },
  {
    id: "5",
    author: {
      id: "2",
      name: "Alex Chen",
      username: "alexc",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Just tried this amazing new restaurant downtown. The food was incredible! #foodie",
    image: "https://i.pravatar.cc/1080?img=30",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    likes: 89,
    comments: 7,
    isLiked: false
  },
  {
    id: "6",
    author: {
      id: "2",
      name: "Alex Chen",
      username: "alexc",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Exciting news coming soon! Stay tuned... 👀",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    likes: 54,
    comments: 23,
    isLiked: false
  }
];

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader {...profileData} />
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
