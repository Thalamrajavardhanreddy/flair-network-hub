
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TrendingTopicProps {
  tag: string;
  count: number;
}

const trendingTopics: TrendingTopicProps[] = [
  { tag: "technology", count: 12403 },
  { tag: "photography", count: 8732 },
  { tag: "traveldiaries", count: 5690 },
  { tag: "foodie", count: 3245 }
];

const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

const TrendingTopic = ({ tag, count }: TrendingTopicProps) => {
  return (
    <Link to={`/explore/tag/${tag}`} className="block p-3 hover-effect">
      <p className="font-medium text-sm">#{tag}</p>
      <p className="text-xs text-muted-foreground">{formatCount(count)} posts</p>
    </Link>
  );
};

const TrendingTopics = () => {
  return (
    <div className="bg-card rounded-xl border border-border">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Trending Topics</h3>
      </div>
      <div className="divide-y">
        {trendingTopics.map((topic) => (
          <TrendingTopic key={topic.tag} {...topic} />
        ))}
      </div>
      <div className="p-4">
        <Button variant="link" className="text-flair-purple w-full">
          Show more
        </Button>
      </div>
    </div>
  );
};

export default TrendingTopics;
