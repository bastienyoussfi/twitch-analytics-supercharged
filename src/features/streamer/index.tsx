import { ArrowUpRight, Users, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ViewerGrowthChart } from "./components/viewer-growth-chart";
import { StreamSchedule } from "./components/stream-schedule";
import { ChatAnalytics } from "./components/chat-analytics";
import { TopClips } from "./components/top-clips";
import { StreamerStats } from "./components/streamer-stats";

interface StreamerDetailsProps {
  streamerId: string;
}

export function StreamerDetails({ streamerId }: StreamerDetailsProps) {
  // This would be fetched from an API in a real implementation
  const streamer = {
    name: "Ninja",
    username: "ninja",
    avatar: "https://i.pravatar.cc/100?u=ninja",
    followers: 18500000,
    avgViewers: 48234,
    peakViewers: 52891,
    chatMessages: 1234567,
    averageStreamLength: "8h 15m",
    trend: "up",
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Streamer Header */}
      <div className="flex items-center gap-6 mb-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src={streamer.avatar} alt={streamer.name} />
          <AvatarFallback>{streamer.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{streamer.name}</h1>
          <p className="text-lg text-muted-foreground">@{streamer.username}</p>
        </div>
        <div className="ml-auto">
          <DatePickerWithRange date={undefined} className="w-[300px]" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="hover-glow card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Followers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {streamer.followers.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="hover-glow card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Viewers
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {streamer.avgViewers.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="hover-glow card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chat Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {streamer.chatMessages.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="hover-glow card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Stream Length
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {streamer.averageStreamLength}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="streams">Streams</TabsTrigger>
          <TabsTrigger value="clips">Clips</TabsTrigger>
          <TabsTrigger value="chat">Chat Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-7 gap-4">
            <ViewerGrowthChart className="col-span-4" />
            <StreamerStats className="col-span-3" />
          </div>
          <div className="grid grid-cols-7 gap-4">
            <StreamSchedule className="col-span-4" />
            <TopClips className="col-span-3" />
          </div>
        </TabsContent>

        <TabsContent value="streams">
          <StreamSchedule className="w-full" />
        </TabsContent>

        <TabsContent value="clips">
          <TopClips className="w-full" />
        </TabsContent>

        <TabsContent value="chat">
          <ChatAnalytics className="w-full" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
