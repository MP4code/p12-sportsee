import activities from "../mocks/activity";
import users from "../mocks/user";
import performances from "../mocks/kindActivity";
import averageSessions from "../mocks/averageSessions";

const API_URL = "http://localhost:3000";

const fetchData = async (path) => {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error("Impossible de charger les données du profil.");
  }

  const result = await response.json();

  return result.data;
};

export const getDashboard = async (userId, useMocks) => {
  const id = Number(userId);

  if (useMocks) {
    const dashboard = {
      user: users.find((user) => user.id === id),
      activity: activities.find((activity) => activity.userId === id),
      performance: performances.find((item) => item.userId === id),
      averageSessions: averageSessions.find((item) => item.userId === id),
    };

    if (Object.values(dashboard).some((value) => !value)) {
      throw new Error("Données introuvables pour cet utilisateur.");
    }

    return dashboard;
  }

  const [user, activity, performance, sessions] = await Promise.all([
    fetchData(`/user/${id}`),
    fetchData(`/user/${id}/activity`),
    fetchData(`/user/${id}/performance`),
    fetchData(`/user/${id}/average-sessions`),
  ]);

  return {
    user,
    activity,
    performance,
    averageSessions: sessions,
  };
};
