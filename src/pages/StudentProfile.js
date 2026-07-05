import { useEffect, useState } from "react";
import axios from "axios";
import profileData from "../data/profile.json";

function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(
          "https://dummy-api-not-working.com/profile"
        );
        setProfile(response.data);
      } catch (error) {
        console.log("API Failed. Loading Mock Data...");
        setProfile(profileData);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Profile</h1>

      <h3>Name: {profile.name}</h3>
      <p>Age: {profile.age}</p>
      <p>Department: {profile.department}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default StudentProfile;