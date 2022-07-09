/* eslint-disable react/react-in-jsx-scope */
import { createContext, ReactNode, useContext, useState } from "react";

interface PilotLoadingProviderProps {
  children: ReactNode;
}

interface PilotLoadingContextData {
  loading: boolean;
  setLoading: (a: boolean) => void;
}

const PilotLoadingContext = createContext<PilotLoadingContextData>(
  {} as PilotLoadingContextData
);

export function PilotLoadingProvider({
  children,
}: PilotLoadingProviderProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <PilotLoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </PilotLoadingContext.Provider>
  );
}

export function usePilotLoading(): PilotLoadingContextData {
  const context = useContext(PilotLoadingContext);

  return context;
}
