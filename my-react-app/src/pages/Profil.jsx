import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { getDashboard } from "../services/dashboardService";

import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import KindActivityChart from "../components/kindActivityChart";
import ScoreChart from "../components/ScoreChart";

const Profil = () => {
  const { useMocks, setUseMocks } = useContext(DataContext);
  const [userId, setUserId] = useState(12);

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadDashboard = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getDashboard(userId, useMocks);

        if (!ignore) {
          setDashboard(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadDashboard();

    return () => {
      ignore = true;
    };
  }, [userId, useMocks]);

  return (
    <div>
      <div className="profil_controls">
        <label htmlFor="source-select">Source : </label>
        <select
          id="source-select"
          value={useMocks ? "mock" : "api"}
          onChange={(event) => setUseMocks(event.target.value === "mock")}
        >
          <option value="mock">Mocks</option>
          <option value="api">API</option>
        </select>

        <label htmlFor="user-select">Utilisateur : </label>
        <select
          id="user-select"
          value={userId}
          onChange={(event) => setUserId(Number(event.target.value))}
        >
          <option value={12}>Utilisateur 12</option>
          <option value={18}>Utilisateur 18</option>
        </select>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : dashboard ? (
        <>
          <h1>
            Bonjour{" "}
            <span className="user-name">
              {dashboard.user.userInfos.firstName}
            </span>
          </h1>

          <ActivityChart sessions={dashboard.activity.sessions} />

          <AverageSessionsChart sessions={dashboard.averageSessions.sessions} />

          <KindActivityChart
            sessions={dashboard.performance.data}
            kind={dashboard.performance.kind}
          />

          <ScoreChart
            score={dashboard.user.todayScore ?? dashboard.user.score ?? 0}
          />
        </>
      ) : null}
    </div>
  );
};

export default Profil;
