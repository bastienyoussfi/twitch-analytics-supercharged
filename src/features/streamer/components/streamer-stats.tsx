import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StreamerStatsProps {
  className?: string;
}

// Mock data - would be fetched from API in real implementation
const stats = [
  {
    metric: "Peak Concurrent Viewers",
    value: "52,891",
    change: "+12.3%",
    positive: true,
  },
  {
    metric: "Average Stream Duration",
    value: "8h 15m",
    change: "+5.8%",
    positive: true,
  },
  {
    metric: "Chat Messages per Stream",
    value: "45,678",
    change: "+8.2%",
    positive: true,
  },
  {
    metric: "New Followers per Stream",
    value: "1,234",
    change: "-2.1%",
    positive: false,
  },
  {
    metric: "Subscriber Ratio",
    value: "32.5%",
    change: "+1.5%",
    positive: true,
  },
  {
    metric: "Average Bits per Stream",
    value: "15,432",
    change: "+9.7%",
    positive: true,
  },
];

export function StreamerStats({ className }: StreamerStatsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Detailed Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stats.map((stat) => (
              <TableRow key={stat.metric}>
                <TableCell className="font-medium">{stat.metric}</TableCell>
                <TableCell className="text-right">{stat.value}</TableCell>
                <TableCell
                  className={`text-right ${
                    stat.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 