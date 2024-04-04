import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (mockUser: User) => void;
}

const initialUser: User | null = null;

const AuthContext = createContext<AuthContextType>({
  user: initialUser,
  signIn: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser);

  const signIn = (mockUser: User) => {
    setUser(mockUser);
  };

  useEffect(() => {
    const mockUser: User = { name: "John Doe", email: "john@mail.com" };
    signIn(mockUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
