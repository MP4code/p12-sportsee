import activities from "../mocks/activity";
import users from "../mocks/user";
import performances from "../mocks/kindActivity";
import averageSessions from "../mocks/averageSessions";

/**
 * FetchData fonction qui récupère les données du profil utilisateur depuis l'API.
 * @param {string} path - Le chemin de l'API pour récupérer les données.
 * @returns {Promise<Object>} - Les données du profil utilisateur.
 * @throws {Error} - Si la requête échoue ou si les données sont introuvables.
 *
 */
const API_URL = "http://localhost:3000";

const fetchData = async (path) => {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error("Impossible de charger les données du profil.");
  }

  const result = await response.json();

  return result.data;
};

// getDashboard fonction qui récupère les données du tableau de bord de l'utilisateur.
// Elle utilise les mocks si useMocks est true, sinon elle récupère les données depuis l'API.
// @param {number} userId - L'identifiant de l'utilisateur.
// @param {boolean} useMocks - Indique si les données doivent être récupérées depuis les mocks ou l'API.
export const getDashboard = async (userId, useMocks) => {
  const id = Number(userId);

  // model de class à faire pour les données du dashboard
  if (useMocks) {
    const dashboard = {
      user: users.find((user) => user.id === id),
      activity: activities.find((activity) => activity.userId === id),
      performance: performances.find((item) => item.userId === id),
      averageSessions: averageSessions.find((item) => item.userId === id),
      score: users.find((user) => user.id === id)?.todayScore,
      nutriments: users.find((user) => user.id === id)?.keyData,
    };

    if (Object.values(dashboard).some((value) => !value)) {
      throw new Error("Données introuvables pour cet utilisateur.");
    }

    return dashboard;
  }

  // Si useMocks est false, on récupère les données depuis l'API
  // On attend que toutes les requêtes soient terminées avant de retourner les données
  const [user, activity, performance, sessions] = await Promise.all([
    fetchData(`/user/${id}`),
    fetchData(`/user/${id}/activity`),
    fetchData(`/user/${id}/performance`),
    fetchData(`/user/${id}/average-sessions`),
    fetchData(`/user/${id}/score`), // Ajout de la récupération du score
    fetchData(`/user/${id}/nutriments`), // Ajout de la récupération des nutriments
  ]);

  return {
    user,
    activity,
    performance,
    averageSessions: sessions,
    score: user?.todayScore,
    nutriments: user?.keyData,
  };
};
