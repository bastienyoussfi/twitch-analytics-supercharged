import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChatAnalyticsProps {
  className?: string;
}

// Mock data - would be fetched from API in real implementation
const chatData = [
  {
    time: "18:00",
    messages: 1200,
    emotes: 450,
    sentiment: 85,
  },
  {
    time: "19:00",
    messages: 2500,
    emotes: 980,
    sentiment: 92,
  },
  {
    time: "20:00",
    messages: 3100,
    emotes: 1200,
    sentiment: 78,
  },
  {
    time: "21:00",
    messages: 2800,
    emotes: 890,
    sentiment: 88,
  },
  {
    time: "22:00",
    messages: 1900,
    emotes: 600,
    sentiment: 90,
  },
];

const sentimentColors = {
  positive: "#22c55e", // green-500
  neutral: "#f59e0b", // amber-500
  negative: "#ef4444", // red-500
};

export function ChatAnalytics({ className }: ChatAnalyticsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Chat Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Message Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chatData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="time"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `${value / 1000}k`}
                    />
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
                                    {payload[0].value?.toLocaleString()} messages
                                  </span>
                                  <span className="font-bold text-purple-500">
                                    {payload[1].value?.toLocaleString()} emotes
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="messages" fill="hsl(var(--primary))" />
                    <Bar dataKey="emotes" fill="#9333ea" />
                    <Legend />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Chat Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chatData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="time"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const sentiment = Number(payload[0].value);
                          let sentimentText = "Neutral";
                          let color = sentimentColors.neutral;
                          
                          if (!isNaN(sentiment)) {
                            if (sentiment >= 85) {
                              sentimentText = "Very Positive";
                              color = sentimentColors.positive;
                            } else if (sentiment >= 70) {
                              sentimentText = "Positive";
                              color = sentimentColors.positive;
                            } else if (sentiment <= 30) {
                              sentimentText = "Negative";
                              color = sentimentColors.negative;
                            }
                          }

                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    {label}
                                  </span>
                                  <span className="font-bold" style={{ color }}>
                                    {sentimentText} ({sentiment}%)
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="sentiment"
                      fill="hsl(var(--primary))"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
} 