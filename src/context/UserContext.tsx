"use client";
import { createContext, useState } from "react";

export const UserContext = createContext({} as any);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
