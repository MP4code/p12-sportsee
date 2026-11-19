import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const translations = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Énergie",
  cardio: "Cardio",
};

const KindActivityChart = ({ sessions, kind }) => {
  const transformedData = sessions.map((session) => ({
    subject: translations[kind[session.kind]] || kind[session.kind],
    A: session.value,
  }));

  return (
    <RadarChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
      outerRadius="55%"
      data={transformedData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
      <PolarRadiusAxis hide />
      <Radar
        name="Performances"
        dataKey="A"
        stroke="#fff"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
};

export default KindActivityChart;
