import { createContext, useContext } from "react";

const HomeContext = createContext();
const useHome = () => useContext(HomeContext);

const HomeProvider = ({ children }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};
export { HomeProvider, useHome };
