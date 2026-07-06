import { useEffect, useState } from "react";
import axios from "axios";
import dashboardData from "../data/dashboard.json";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const response = await axios.get(
          "https://dummy-api-not-working.com/dashboard"
        );
        setData(response.data);
      } catch (error) {
        console.log("API Failed. Loading Mock Data...");
        setData(dashboardData);
      } finally {
        setLoading(false);
      }
    };

    getDashboard();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="dashboard">

      <h1>🎓 Student Dashboard</h1>
      <p>Welcome to Student Management System</p>

      <div className="card-container">

        <div className="card">
          <h2>👨‍🎓 Students</h2>
          <h1>{data.totalStudents}</h1>
        </div>

        <div className="card">
          <h2>📚 Courses</h2>
          <h1>{data.totalCourses}</h1>
        </div>

        <div className="card">
          <h2>✅ Attendance</h2>
          <h1>{data.attendance}</h1>
        </div>

        <div className="card">
          <h2>🔔 Notifications</h2>
          <h1>{data.notifications}</h1>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;