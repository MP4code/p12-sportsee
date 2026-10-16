import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const days = ["L", "M", "M", "J", "V", "S", "D"];

const AverageSessionsChart = ({ sessions }) => {
  return (
    <section>
      <h2>Durée moyenne des sessions</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={sessions}
          margin={{ top: 20, right: 20, bottom: 10, left: 20 }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={(day) => days[day - 1]}
            tickLine={false}
            axisLine={false}
          />

          <YAxis hide domain={[0, "dataMax + 10"]} />

          <Tooltip
            formatter={(value) => [`${value} min`, "Durée"]}
            labelFormatter={(day) => `Jour ${day}`}
          />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#E60000"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default AverageSessionsChart;
