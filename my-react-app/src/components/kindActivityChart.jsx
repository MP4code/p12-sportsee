import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const translations = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
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
      data={transformedData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Performances"
        dataKey="A"
        stroke="#E60000"
        fill="#E60000"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
};

export default KindActivityChart;
