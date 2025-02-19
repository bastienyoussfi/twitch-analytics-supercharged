import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface StreamScheduleProps {
  className?: string;
}

// Mock data - would be fetched from API in real implementation
const streams = [
  {
    date: "2024-03-15",
    time: "18:00",
    duration: "4h 30m",
    title: "Fortnite Championship Series",
    category: "Fortnite",
    status: "upcoming",
    viewers: null,
  },
  {
    date: "2024-03-14",
    time: "19:00",
    duration: "6h 15m",
    title: "Late Night Gaming Session",
    category: "Just Chatting",
    status: "completed",
    viewers: 45678,
  },
  {
    date: "2024-03-13",
    time: "17:00",
    duration: "5h 45m",
    title: "Ranked Grind",
    category: "Valorant",
    status: "completed",
    viewers: 38921,
  },
  {
    date: "2024-03-12",
    time: "18:30",
    duration: "4h 00m",
    title: "Community Game Night",
    category: "Various",
    status: "completed",
    viewers: 42156,
  },
  {
    date: "2024-03-11",
    time: "19:00",
    duration: "5h 30m",
    title: "Season Launch Stream",
    category: "Fortnite",
    status: "completed",
    viewers: 52891,
  },
];

export function StreamSchedule({ className }: StreamScheduleProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Stream Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Stream Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Duration</TableHead>
              <TableHead className="text-right">Peak Viewers</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {streams.map((stream) => (
              <TableRow key={`${stream.date}-${stream.time}`}>
                <TableCell className="font-medium">
                  {stream.date}
                  <br />
                  <span className="text-muted-foreground">{stream.time}</span>
                </TableCell>
                <TableCell>{stream.title}</TableCell>
                <TableCell>{stream.category}</TableCell>
                <TableCell className="text-right">{stream.duration}</TableCell>
                <TableCell className="text-right">
                  {stream.viewers?.toLocaleString() ?? "-"}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={stream.status === "upcoming" ? "secondary" : "default"}
                    className="ml-auto"
                  >
                    {stream.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 