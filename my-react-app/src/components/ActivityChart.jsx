import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ActivityChart = ({ sessions }) => {
  return (
    <section className="activity">
      <p>Activité quotidienne</p>
      <div className="activity-header">
        <div className="PoidsColor"></div>
        <p>Poids (kg)</p>
        <div className="CaloriesColor"></div>
        <p>Calories brûlées (kCal)</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={sessions} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="day" tickLine={false} />

          <YAxis
            yAxisId="weight"
            orientation="right"
            domain={["dataMin - 1", "dataMax + 1"]}
            tickLine={false}
            axisLine={false}
          />

          <YAxis yAxisId="calories" domain={[0, "dataMax + 100"]} hide />

          <Tooltip />

          <Bar
            yAxisId="weight"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />

          <Bar
            yAxisId="calories"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ActivityChart;
