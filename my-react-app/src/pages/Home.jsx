import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Page d'accueil de l'application.
 * Permet à l'utilisateur de sélectionner un utilisateur et une source de données (mocks ou API).
 * Redirige vers la page Profil avec les paramètres sélectionnés.
 *
 * @returns {JSX.Element} - Le composant Home.
 */

const Home = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("12");
  const [source, setSource] = useState("mock");

  function handleSubmit(event) {
    event.preventDefault();

    navigate(`/profil/${userId}`, {
      state: {
        userId: Number(userId),
        source,
      },
    });
  }

  return (
    <div>
      <h1>Accueil</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="user">Sélectionnez un utilisateur : </label>

          <select
            id="user"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            required
          >
            <option value="">Veuillez sélectionner un utilisateur</option>
            <option value="12">USER 12</option>
            <option value="18">USER 18</option>
          </select>
        </p>

        <p>
          <label htmlFor="user-source">Sélectionnez la source : </label>

          <select
            id="user-source"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            required
          >
            <option value="">Veuillez sélectionner une source</option>
            <option value="mock">Mocks</option>
            <option value="api">API</option>
          </select>
        </p>

        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Home;
