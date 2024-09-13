import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);

  return (
    isAuthenticated &&
    user && (
      <div className="d-flex gap-3 mb-4">
        {user.picture && (
          <img src={user?.picture} alt={user?.name} className="rounded-pill" />
        )}
        <div>
          <h2 className="h4 fw-bold mt-3">{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
