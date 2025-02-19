import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  {
    time: "0:00",
    positive: 65,
    neutral: 25,
    negative: 10,
    messages: 120,
  },
  {
    time: "0:15",
    positive: 70,
    neutral: 20,
    negative: 10,
    messages: 150,
  },
  {
    time: "0:30",
    positive: 60,
    neutral: 30,
    negative: 10,
    messages: 180,
  },
  {
    time: "0:45",
    positive: 75,
    neutral: 15,
    negative: 10,
    messages: 200,
  },
  {
    time: "1:00",
    positive: 80,
    neutral: 15,
    negative: 5,
    messages: 250,
  },
  {
    time: "1:15",
    positive: 85,
    neutral: 10,
    negative: 5,
    messages: 300,
  },
  {
    time: "1:30",
    positive: 75,
    neutral: 20,
    negative: 5,
    messages: 280,
  },
].map((item) => ({
  ...item,
  positive: item.positive + Math.floor(Math.random() * 10 - 5),
  neutral: item.neutral + Math.floor(Math.random() * 10 - 5),
  negative: item.negative + Math.floor(Math.random() * 5 - 2.5),
  messages: item.messages + Math.floor(Math.random() * 40 - 20),
}));

export function ChatSentimentChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-muted"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="time"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="left"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Time
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {label}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Messages
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[3].value}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Sentiment
                          </span>
                          <div className="flex gap-2 text-sm">
                            <span className="text-green-500">
                              +{payload[0].value}%
                            </span>
                            <span className="text-blue-500">
                              ={payload[1].value}%
                            </span>
                            <span className="text-red-500">
                              -{payload[2].value}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="positive"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="neutral"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="negative"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="messages"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 