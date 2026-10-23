import { createContext, useState } from "react";

/**
 * DataContext.jsx
 * Ce fichier contient le contexte pour gérer l'état global de l'application, notamment l'utilisation des données mockées.
 *
 */

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [useMocks, setUseMocks] = useState(true);

  return (
    <DataContext.Provider value={{ useMocks, setUseMocks }}>
      {children}
    </DataContext.Provider>
  );
};
