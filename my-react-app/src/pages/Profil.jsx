import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDashboard } from "../services/dashboardService";
import KindActivityChart from "../components/KindActivityChart";
import "../App.css";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import ScoreChart from "../components/ScoreChart";
import NutrientCard from "../components/NutrientCard";

import caloriesIcon from "../assets/calories-icon.png";
import appleIcon from "../assets/apple.png";
import cheeseburgerIcon from "../assets/cheeseburger.png";
import chickenIcon from "../assets/chicken.png";

const Profil = () => {
  const { id } = useParams();
  const location = useLocation();
  const source = location.state?.source ?? "mock";

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadDashboard() {
      setLoading(true);
      setError("");

      try {
        const data = await getDashboard(id, source === "mock");

        if (!ignore) {
          setDashboard(data);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    return () => {
      ignore = true;
    };
  }, [id, source]);

  if (loading) return <p>Chargement…</p>;

  if (error) {
    return (
      <p role="alert">
        Impossible de charger le profil. Vérifie l’ID de l’utilisateur, la
        source choisie et que l’API est démarrée si tu l’utilises.
      </p>
    );
  }

  if (!dashboard) return null;
  const nutrients = [
    {
      type: "calories",
      label: "Calories",
      value: dashboard.user.keyData.calorieCount,
      unit: "kCal",
      icon: caloriesIcon,
    },
    {
      type: "protein",
      label: "Protéines",
      value: dashboard.user.keyData.proteinCount,
      unit: "g",
      icon: chickenIcon,
    },
    {
      type: "carbs",
      label: "Glucides",
      value: dashboard.user.keyData.carbohydrateCount,
      unit: "g",
      icon: appleIcon,
    },
    {
      type: "fat",
      label: "Lipides",
      value: dashboard.user.keyData.lipidCount,
      unit: "g",
      icon: cheeseburgerIcon,
    },
  ];

  return (
    <div className="profil">
      <p>Source : {source}</p>
      <h1>
        Bonjour{" "}
        <span className="first-name">{dashboard.user.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="charts-Container">
        <div className="charts-content">
          <section className="ActivityQuotidienne">
            <ActivityChart sessions={dashboard.activity.sessions} />
          </section>

          <section className="charts">
            <div
              className="kindActivity"
              style={{ width: "258px", height: "263px" }}
            >
              <KindActivityChart
                sessions={dashboard.performance.data}
                kind={dashboard.performance.kind}
              />
            </div>
            <div
              className="averageSessionsChart"
              style={{ width: "258px", height: "263px" }}
            >
              <AverageSessionsChart
                sessions={dashboard.averageSessions.sessions}
              />
            </div>
            <div
              className="scoreChart"
              style={{ width: "258px", height: "263px" }}
            >
              <ScoreChart score={dashboard.user.todayScore} />
            </div>
          </section>
        </div>
        <div className="charts-nutrients">
          <section className="nutriments">
            <div className="nutrients">
              {nutrients.map((nutrient) => (
                <NutrientCard key={nutrient.type} {...nutrient} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profil;
