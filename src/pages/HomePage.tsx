
import Feed from "@/components/feed/Feed";
import SuggestedUsers from "@/components/suggestions/SuggestedUsers";
import TrendingTopics from "@/components/suggestions/TrendingTopics";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-3">
        <Feed />
      </div>
      <div className="hidden md:block space-y-6">
        <SuggestedUsers />
        <TrendingTopics />
      </div>
    </div>
  );
};

export default HomePage;
