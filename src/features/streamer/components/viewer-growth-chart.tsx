import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ViewerGrowthChartProps {
  className?: string;
}

// Mock data - would be fetched from API in real implementation
const data = [
  { date: "Jan 1", viewers: 12000, followers: 1000000 },
  { date: "Jan 8", viewers: 19000, followers: 1050000 },
  { date: "Jan 15", viewers: 24000, followers: 1120000 },
  { date: "Jan 22", viewers: 31000, followers: 1180000 },
  { date: "Jan 29", viewers: 38000, followers: 1250000 },
  { date: "Feb 5", viewers: 42000, followers: 1320000 },
  { date: "Feb 12", viewers: 49000, followers: 1400000 },
].map(item => ({
  ...item,
  viewers: item.viewers + Math.floor(Math.random() * 5000),
  followers: item.followers + Math.floor(Math.random() * 50000),
}));

export function ViewerGrowthChart({ className }: ViewerGrowthChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Growth Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorViewers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis
                yAxisId="left"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `${value / 1000000}M`}
              />
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {label}
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value?.toLocaleString()} viewers
                            </span>
                            <span className="font-bold text-purple-500">
                              {payload[1].value?.toLocaleString()} followers
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="viewers"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorViewers)"
                strokeWidth={2}
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="followers"
                stroke="#9333ea"
                fillOpacity={1}
                fill="url(#colorFollowers)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 