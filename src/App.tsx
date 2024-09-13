import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="min-vh-100 bg-secondary-subtle d-flex justify-content-center align-items-center">
      {isAuthenticated ? (
        <>
          <div className="border  p-5 bg-white rounded-4 shadow">
            <Profile />
            <LogoutButton />
          </div>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
