import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const regions = [
  {
    region: "North America",
    viewers: 45234,
    percentage: 35.2,
    growth: 12.5,
  },
  {
    region: "Europe",
    viewers: 38765,
    percentage: 30.1,
    growth: 15.8,
  },
  {
    region: "Asia Pacific",
    viewers: 25432,
    percentage: 19.8,
    growth: 22.4,
  },
  {
    region: "Latin America",
    viewers: 12543,
    percentage: 9.7,
    growth: 18.9,
  },
  {
    region: "Middle East & Africa",
    viewers: 6789,
    percentage: 5.2,
    growth: 25.6,
  },
].map((item) => ({
  ...item,
  viewers: item.viewers + Math.floor(Math.random() * 2000 - 1000),
  percentage: item.percentage + Math.floor(Math.random() * 2 - 1),
  growth: item.growth + Math.floor(Math.random() * 4 - 2),
}));

export function GeographicDistribution() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Region</TableHead>
            <TableHead className="text-right">Viewers</TableHead>
            <TableHead className="text-right">Distribution</TableHead>
            <TableHead className="text-right">Growth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {regions.map((region) => (
            <TableRow key={region.region} className="hover:bg-muted/50">
              <TableCell className="font-medium">{region.region}</TableCell>
              <TableCell className="text-right">
                {region.viewers.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">{region.percentage}%</TableCell>
              <TableCell className="text-right text-green-500">
                +{region.growth}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 