import { useEffect, useState } from "react";
import axios from "axios";
import dashboardData from "../data/dashboard.json";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
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

    fetchDashboard();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading Dashboard...</h2>;
  }

  const today = new Date().toLocaleDateString();

  return (
    <div className="page">
      <h1>🎓 Student Dashboard</h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "30px",
          fontSize: "18px",
        }}
      >
        Welcome to Student Management System
      </p>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,.15)",
          textAlign: "center",
        }}
      >
        <h2>👋 Welcome Back!</h2>
        <p>Today's Date : {today}</p>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h2>👨‍🎓 Students</h2>
          <p>{data.totalStudents}</p>
        </div>

        <div className="card">
          <h2>📚 Courses</h2>
          <p>{data.totalCourses}</p>
        </div>

        <div className="card">
          <h2>✅ Attendance</h2>
          <p>{data.attendance}</p>
        </div>

        <div className="card">
          <h2>🔔 Notifications</h2>
          <p>{data.notifications}</p>
        </div>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "40px",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,.15)",
        }}
      >
        <h2 style={{ color: "#1e3a8a" }}>📊 Dashboard Overview</h2>

        <br />

        <p>Total Students</p>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "100%" }}
          ></div>
        </div>

        <br />

        <p>Attendance</p>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: data.attendance }}
          ></div>
        </div>

        <br />

        <p>Courses Completed</p>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;