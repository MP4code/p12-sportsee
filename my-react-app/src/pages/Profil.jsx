import mockActivity from "../mocks/activity";
import mockUser from "../mocks/user";
import kindActivity from "../mocks/kindActivity";
import averageSessions from "../mocks/averageSessions";

import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import KindActivityChart from "../components/kindActivityChart";

const Profil = () => {
  return (
    <div>
      <h1>
        Bonjour
        <span className="user-name">{mockUser.userInfos.firstName}</span>
      </h1>
      <ActivityChart sessions={mockActivity.sessions} />
      <AverageSessionsChart sessions={averageSessions.sessions} />
      <KindActivityChart
        sessions={kindActivity.data}
        kind={kindActivity.kind}
      />
    </div>
  );
};

export default Profil;
