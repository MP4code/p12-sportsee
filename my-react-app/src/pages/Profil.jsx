import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDashboard } from "../services/dashboardService";
import KindActivityChart from "../components/KindActivityChart";
import "../App.css";
import AverageSessionsChart from "../components/AverageSessionsChart";
import ScoreChart from "../components/ScoreChart";

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

  return (
    <div className="profil">
      <p>Source : {source}</p>
      <h1>Bonjour {dashboard.user.userInfos.firstName}</h1>

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
          <AverageSessionsChart sessions={dashboard.averageSessions.sessions} />
        </div>
        <div className="scoreChart" style={{ width: "258px", height: "263px" }}>
          <ScoreChart score={dashboard.user.todayScore} />
        </div>
      </section>
    </div>
  );
};

export default Profil;
