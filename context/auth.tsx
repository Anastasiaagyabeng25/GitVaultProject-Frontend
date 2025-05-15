import { useRouter, useSegments } from "expo-router";
import React, { FC, ReactNode } from "react";

export type UserCredentials = {
  email: string;
  password: string;
  token: string; // JWT token
};

type CredentialsContext = {
  signIn: (userCredentials: UserCredentials) => void;
  signOut: () => void;
  user: UserCredentials | null;
  token: string | null;
};

type AuthProviderProps = {
  userCredentials: UserCredentials | null;
  children?: ReactNode;
};

const AuthContext = React.createContext<CredentialsContext>({
  signIn: () => {},
  signOut: () => {},
  user: null,
  token: null,
});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect route access based on user authentication.
export function useProtectedRoute(user: UserCredentials | null) {
  // Get the current route segments (e.g., ["(auth)", "login"] or ["tabs", "home"])
const segments = useSegments() as any[];

  // Get the router instance for navigation
  const router = useRouter();

  React.useEffect(() => {
    // Wait until the segments are loaded
 if (!segments || segments.length === 0) return;


    // Check if the current route is part of the (auth) group
    const inAuthGroup = segments[0] === "(auth)";

    // If the user is NOT signed in and is not in the auth group, redirect to login
    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login"); // Replace with your actual login screen path
    }

    // If the user IS signed in but is currently on an auth route, redirect to the tabs/home screen
    else if (user && inAuthGroup) {
      router.replace("/(tabs)/(home)"); // Replace with your actual post-login screen path
    }
  }, [user, segments]);
}

export const Provider: FC<AuthProviderProps> = (props) => {
  const [user, setAuth] = React.useState<UserCredentials | null>(
    props.userCredentials
  );
  const token = user?.token || null;

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (userCredentials: UserCredentials) => setAuth(userCredentials),
        signOut: () => setAuth(null),
        user,
        token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};





// use when you want to make a call to the back end and require authentication 
// const { token } = useAuth();

// fetch("https://your-api.com/secure-endpoint", {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });