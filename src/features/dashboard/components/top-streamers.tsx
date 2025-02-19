import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const streamers = [
  {
    name: "Ninja",
    username: "ninja",
    avatar: "https://i.pravatar.cc/100?u=ninja",
    viewers: 48234,
    trend: "up",
  },
  {
    name: "Pokimane",
    username: "pokimane",
    avatar: "https://i.pravatar.cc/100?u=pokimane",
    viewers: 32156,
    trend: "up",
  },
  {
    name: "Shroud",
    username: "shroud",
    avatar: "https://i.pravatar.cc/100?u=shroud",
    viewers: 28945,
    trend: "down",
  },
  {
    name: "TimTheTatman",
    username: "timthetatman",
    avatar: "https://i.pravatar.cc/100?u=timthetatman",
    viewers: 25632,
    trend: "up",
  },
  {
    name: "DrLupo",
    username: "drlupo",
    avatar: "https://i.pravatar.cc/100?u=drlupo",
    viewers: 21543,
    trend: "down",
  },
];

export function TopStreamers() {
  return (
    <Card className="col-span-3 hover-glow card-gradient">
      <CardHeader>
        <CardTitle>Top Streamers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {streamers.map((streamer) => (
            <div key={streamer.username} className="flex items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
              <Avatar className="h-9 w-9">
                <AvatarImage src={streamer.avatar} alt={streamer.name} />
                <AvatarFallback>{streamer.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{streamer.name}</p>
                <p className="text-sm text-muted-foreground">
                  @{streamer.username}
                </p>
              </div>
              <div className="ml-auto font-medium">
                <div className="flex items-center gap-1">
                  {streamer.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  {streamer.viewers.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
