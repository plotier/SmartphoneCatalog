import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { GlobalContextType } from "../types/context";

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
