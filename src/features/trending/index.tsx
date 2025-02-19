import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, ArrowDownRight, Sparkles, Trophy, Medal } from "lucide-react";

const streamers = Array.from({ length: 20 }, (_, i) => ({
  name: ["Ninja", "Pokimane", "Shroud", "TimTheTatman", "DrLupo", "xQc", "Valkyrae", "NICKMERCS", "Sykkuno", "Ludwig"][i % 10],
  username: ["ninja", "pokimane", "shroud", "timthetatman", "drlupo", "xqc", "valkyrae", "nickmercs", "sykkuno", "ludwig"][i % 10],
  avatar: `https://i.pravatar.cc/150?u=${i}`,
  rank: i + 1,
  viewers: Math.floor(50000 * Math.random()) + 10000,
  trend: Math.random() > 0.5 ? "up" : "down",
  growth: Math.floor(Math.random() * 200) - 100,
  category: ["Just Chatting", "Fortnite", "Valorant", "Minecraft", "League of Legends"][Math.floor(Math.random() * 5)],
}));

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-300" />;
    case 3:
      return <Medal className="h-5 w-5 text-amber-600" />;
    default:
      return null;
  }
}

export function Trending() {
  return (
    <div className="h-full p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight purple-glow flex items-center gap-2">
          Trending <Sparkles className="h-8 w-8 text-primary" />
        </h2>
        <p className="text-muted-foreground">
          Discover what's hot on Twitch right now
        </p>
      </div>

      <div className="grid gap-4">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Top Rising Streamers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {streamers.map((streamer) => (
                <div
                  key={streamer.username + streamer.rank}
                  className="flex items-center hover-glow rounded-lg p-2"
                >
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(streamer.rank) || (
                      <span className="text-muted-foreground font-medium">
                        {streamer.rank}
                      </span>
                    )}
                  </div>
                  <Avatar className="h-10 w-10 ml-4">
                    <AvatarImage src={streamer.avatar} alt={streamer.name} />
                    <AvatarFallback>{streamer.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">{streamer.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {streamer.category}
                    </p>
                  </div>
                  <div className="ml-4 font-medium text-right">
                    <div className="flex items-center gap-1 justify-end">
                      {streamer.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                      <span>{streamer.viewers.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {streamer.growth > 0 ? "+" : ""}
                      {streamer.growth}% this week
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 