import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
