
import Post, { PostProps } from "./Post";
import NewPostForm from "./NewPostForm";

// Mock data
const posts: PostProps[] = [
  {
    id: "1",
    author: {
      id: "1",
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "Just launched my new portfolio website! Check it out and let me know what you think. 🚀 #webdev #portfolio",
    image: "https://i.pravatar.cc/1080?img=22",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    likes: 24,
    comments: 5,
    isLiked: false
  },
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
    id: "3",
    author: {
      id: "3",
      name: "Jordan Taylor",
      username: "jordant",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    content: "Excited to announce that I've joined the team at @TechInnovators as a Senior Developer! New challenges ahead. 💼",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    likes: 89,
    comments: 32,
    isLiked: false
  },
  {
    id: "4",
    author: {
      id: "4",
      name: "Mia Wong",
      username: "miaw",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    content: "Just finished reading 'The Psychology of Money' by Morgan Housel. Highly recommend for anyone interested in personal finance and behavioral psychology! 📚",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    likes: 56,
    comments: 14,
    isLiked: false
  }
];

const Feed = () => {
  return (
    <div>
      <NewPostForm />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
