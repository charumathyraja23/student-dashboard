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
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>

      <h3>Total Students: {data.totalStudents}</h3>
      <h3>Total Courses: {data.totalCourses}</h3>
      <h3>Attendance: {data.attendance}</h3>
      <h3>Notifications: {data.notifications}</h3>
    </div>
  );
}

export default Dashboard;