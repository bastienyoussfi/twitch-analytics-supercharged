import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { DatePickerWithRange } from "@/components/date-range-picker";
import type { DateRange } from "react-day-picker";

// Mock data - replace with real API calls
const mockStreamers = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: ["Ninja", "Pokimane", "Shroud", "TimTheTatman", "DrLupo"][i % 5],
  username: ["ninja", "pokimane", "shroud", "timthetatman", "drlupo"][i % 5],
  avatar: `https://i.pravatar.cc/150?u=${i}`,
  category: ["Just Chatting", "Fortnite", "Valorant", "Minecraft"][i % 4],
  viewers: Math.floor(Math.random() * 50000) + 1000,
  followers: Math.floor(Math.random() * 1000000) + 100000,
  growth: Math.floor(Math.random() * 200) - 100,
}));

export function Analytics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  
  const filteredStreamers = mockStreamers.filter(streamer => 
    streamer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    streamer.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Streamer Analytics</h2>
          <p className="text-muted-foreground">
            Search and analyze streamer performance
          </p>
        </div>
        <DatePickerWithRange 
          className="w-[300px]"
          date={dateRange}
          onSelect={setDateRange}
        />
      </div>

      <Card className="card-gradient">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search streamers by name or username..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredStreamers.map((streamer) => (
              <div
                key={streamer.id}
                className="flex items-center hover-glow rounded-lg p-2 cursor-pointer"
                onClick={() => {
                  // Navigate to streamer details page
                  // window.location.href = `/analytics/streamer/${streamer.username}`;
                }}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={streamer.avatar} alt={streamer.name} />
                  <AvatarFallback>{streamer.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">{streamer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {streamer.category}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <div className="flex items-center gap-1 justify-end">
                    {streamer.growth > 0 ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span>{streamer.viewers.toLocaleString()} viewers</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {streamer.followers.toLocaleString()} followers
                  </p>
                </div>
                <TrendingUp 
                  className={`ml-4 h-4 w-4 ${
                    streamer.growth > 0 ? 'text-green-500' : 'text-red-500'
                  }`} 
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 