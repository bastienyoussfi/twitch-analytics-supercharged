import { Card } from "@/components/ui/card";
import { Play, Heart, MessageCircle, Eye, Sparkles } from "lucide-react";

const clips = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    "Insane 1v5 Clutch!",
    "Epic Fail Moments",
    "Best Play of the Year",
    "Hilarious Stream Highlights",
    "Unexpected Plot Twist",
    "Pro Gamer Moves",
  ][i % 6],
  streamer: [
    "Ninja",
    "Pokimane",
    "Shroud",
    "TimTheTatman",
    "DrLupo",
    "xQc",
  ][i % 6],
  game: [
    "Valorant",
    "Fortnite",
    "League of Legends",
    "Minecraft",
    "Call of Duty",
    "Just Chatting",
  ][i % 6],
  thumbnail: `https://picsum.photos/seed/${i}/400/225`,
  views: Math.floor(Math.random() * 1000000) + 50000,
  likes: Math.floor(Math.random() * 50000) + 1000,
  comments: Math.floor(Math.random() * 1000) + 100,
  duration: `${Math.floor(Math.random() * 2) + 1}:${Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0")}`,
}));

export function Clips() {
  return (
    <div className="h-full p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight purple-glow flex items-center gap-2">
          Trending Clips <Sparkles className="h-8 w-8 text-primary" />
        </h2>
        <p className="text-muted-foreground">
          Browse and analyze trending clips
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {clips.map((clip) => (
          <Card
            key={clip.id}
            className="overflow-hidden hover-glow card-gradient group cursor-pointer"
          >
            <div className="relative aspect-video">
              <img
                src={clip.thumbnail}
                alt={clip.title}
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                {clip.duration}
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                {clip.title}
              </h3>
              <p className="text-sm text-muted-foreground">{clip.streamer}</p>
              <p className="text-xs text-muted-foreground">{clip.game}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{(clip.views / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{(clip.likes / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{clip.comments}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 