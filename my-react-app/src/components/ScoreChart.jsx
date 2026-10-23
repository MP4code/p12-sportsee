import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import "./ScoreChart.css";

const ScoreChart = ({ score }) => {
  const percentage = Math.round(score * 100);
  const data = [{ value: percentage }];

  return (
    <div className="scoreChart">
      <h2 className="scoreChart_title">Score</h2>

      <div className="scoreChart_graph">
        <div className="scoreChart_circle" />

        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="90%"
            barSize={10}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />

            <RadialBar dataKey="value" fill="#ff0000" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>

        <p className="scoreChart_text">
          <strong>{percentage}%</strong>
          <span>de votre</span>
          <span>objectif</span>
        </p>
      </div>
    </div>
  );
};

export default ScoreChart;
