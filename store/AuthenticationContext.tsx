import React, { createContext, useState, ReactNode } from "react";

export interface AuthContextValue {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

export const AuthenticationContext = createContext<AuthContextValue>({
  token: null,
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const AuthenticationContextProvider = ({ children }: ProviderProps) => {
  const [authenticationToken, setAuthenticationToken] = useState<string | null>(
    null
  );
  const authenticate = (token: string) => {
    setAuthenticationToken(token);
  };
};
