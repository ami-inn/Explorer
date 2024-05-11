
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1000,
  },
  {
    name: "Page B",
    uv: 150,
  },
  {
    name: "Pagef B",
    uv: 650,
  },
  {
    name: "Page Bf",
    uv: 50,
  },
  {
    name: "Page C",
    uv: 980,
  },
  {
    name: "Page D",
    uv: 1320,
  },
  {
    name: "Page E",
    uv: 400,
  },
  {
    name: "Page F",
    uv: 1780,
  },
  {
    name: "Page G",
    uv: 140,
  },
  {
    name: "Page H",
    uv: 1889,
  },
  {
    name: "Page i",
    uv: 170,
  },
  {
    name: "Page j",
    uv: 1280,
  },
];

const RepositoryLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart height={50} data={data}>
        <defs>
          <linearGradient id="colorGradient">
            {/* <stop offset="0%" stopColor="#D70E62" /> */}
            <stop offset="0%" stopColor="black" />
            <stop offset="50%" stopColor="#D70E62" />

            <stop offset="100%" stopColor="#D70E62" />
          </linearGradient>
        </defs>
        <Line
          type="linear"
          // dot={false}
          dataKey="uv"
          strokeWidth={1} // Set the strokeWidth to make the line thicker
          stroke="url(#colorGradient)" // Use the linear gradient as the stroke color
          isAnimationActive={false} // Disable animation for a smoother round line
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RepositoryLineChart;