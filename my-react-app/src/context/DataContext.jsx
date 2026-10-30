import { createContext, useState } from "react";

// Crée un contexte pour partager l'état global de l'application.
// Le contexte doit être exporté pour pouvoir être utilisé dans d'autres composants.
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [useMocks, setUseMocks] = useState(true);

  return (
    <DataContext.Provider value={{ useMocks, setUseMocks }}>
      {children}
    </DataContext.Provider>
  );
};
