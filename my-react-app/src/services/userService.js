import { mockUser } from "../mocks/user";

export async function getUser(id) {
  if (mockUser.id !== Number(id)) {
    throw new Error("Utilisateur introuvable");
  }

  return mockUser;
}
