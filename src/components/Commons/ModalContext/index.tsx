import { createContext, useState, useContext } from "react";

export interface ModalsContextType {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
}
const initialModalsContext: ModalsContextType = {
  setToggle: () => { },
  toggle: false,
};
const ModalsContext = createContext<ModalsContextType>(initialModalsContext);

export const useModals = () => useContext(ModalsContext);
export const ModalsProvider: React.FC<{ children: any }> = ({ children }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        setToggle,
        toggle,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
