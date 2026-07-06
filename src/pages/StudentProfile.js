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
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="profile-page">
      <h1>👨‍🎓 Student Profile</h1>

      <div className="profile-card">
        <div className="profile-avatar">
          {profile.name.charAt(0)}
        </div>

        <h2>{profile.name}</h2>

        <hr style={{ margin: "15px 0" }} />

        <p><b>🎂 Age :</b> {profile.age}</p>

        <p><b>💻 Department :</b> {profile.department}</p>

        <p><b>📚 Course :</b> {profile.course}</p>

        <p><b>📧 Email :</b> {profile.email}</p>

        <p><b>📱 Phone :</b> {profile.phone}</p>

        <p><b>📍 Address :</b> {profile.address}</p>

        <p><b>✅ Attendance : 96%</b> {profile.attendance}</p>

        <p><b>🎓 CGPA : 7.5</b> {profile.cgpa}</p>
      </div>
    </div>
  );
}

export default StudentProfile;