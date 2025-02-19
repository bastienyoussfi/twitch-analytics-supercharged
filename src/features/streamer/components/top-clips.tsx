import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ThumbsUp, Eye } from "lucide-react";

interface TopClipsProps {
  className?: string;
}

// Mock data - would be fetched from API in real implementation
const clips = [
  {
    id: "1",
    title: "Insane 1v5 Clutch",
    thumbnail: "https://i.pravatar.cc/300?u=clip1",
    views: 125678,
    likes: 15234,
    duration: "0:45",
    game: "Valorant",
    date: "2024-03-14",
  },
  {
    id: "2",
    title: "Perfect Victory Royale",
    thumbnail: "https://i.pravatar.cc/300?u=clip2",
    views: 98432,
    likes: 12543,
    duration: "1:20",
    game: "Fortnite",
    date: "2024-03-13",
  },
  {
    id: "3",
    title: "Hilarious Donation Reaction",
    thumbnail: "https://i.pravatar.cc/300?u=clip3",
    views: 87654,
    likes: 10987,
    duration: "0:30",
    game: "Just Chatting",
    date: "2024-03-12",
  },
];

export function TopClips({ className }: TopClipsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Clips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {clips.map((clip) => (
            <div
              key={clip.id}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-video cursor-pointer">
                <img
                  src={clip.thumbnail}
                  alt={clip.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {clip.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate">{clip.title}</h3>
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {clip.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {clip.likes.toLocaleString()}
                    </span>
                  </div>
                  <span>{clip.game}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 