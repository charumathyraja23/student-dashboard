import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎓 Student Dashboard
      </div>

      <div className="nav-links">
        <Link to="/">🏠 Dashboard</Link>

        <Link to="/students">👨‍🎓 Students</Link>

        <Link to="/profile">👤 Profile</Link>

        <Link to="/courses">📚 Courses</Link>

        <Link to="/attendance">📅 Attendance</Link>

        <Link to="/notifications" className="notification-link">
          🔔 Notifications
          <span className="badge">5</span>
        </Link>
      </div>

      <div className="user-profile">
        <div className="user-avatar">C</div>
        <div className="user-info">
          <h4>Charumathy</h4>
          <p>Student</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;