import { mockUser } from "../mocks/user";

const API_URL = "http://localhost:3000";

export const getUser = async (userId, useMocks) => {
  if (useMocks) {
    if (mockUser.id !== userId) {
      throw new Error("Cet utilisateur n'existe pas dans les mocks.");
    }

    return mockUser;
  }

  const response = await fetch(`${API_URL}/user/${userId}`);

  if (!response.ok) {
    throw new Error("Impossible de récupérer l'utilisateur.");
  }

  const result = await response.json();

  return result.data;
};
