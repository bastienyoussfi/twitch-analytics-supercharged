import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Last Stream",
    views: 12453,
    engagement: 82,
    duration: "3h 15m",
  },
  {
    name: "Valorant Tournament",
    views: 18234,
    engagement: 89,
    duration: "4h 45m",
  },
  {
    name: "Just Chatting",
    views: 8432,
    engagement: 75,
    duration: "2h 30m",
  },
  {
    name: "Minecraft Build",
    views: 15674,
    engagement: 85,
    duration: "5h 00m",
  },
  {
    name: "Special Event",
    views: 25123,
    engagement: 92,
    duration: "6h 20m",
  },
].map((item) => ({
  ...item,
  views: item.views + Math.floor(Math.random() * 2000 - 1000),
  engagement: item.engagement + Math.floor(Math.random() * 10 - 5),
}));

export function StreamPerformanceChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            yAxisId="left"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Stream
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {label}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Views
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Engagement
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[1].value}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="views"
            yAxisId="left"
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="engagement"
            yAxisId="right"
            fill="hsl(var(--secondary))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 