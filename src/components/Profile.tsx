import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <img src={user.picture} alt={user.name} className="w-32 h-32 rounded-full mb-4" />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
