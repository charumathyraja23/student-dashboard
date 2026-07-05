import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#0d6efd", padding: "15px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Dashboard
      </Link>

      <Link to="/students" style={{ color: "white", marginRight: "20px" }}>
        Student List
      </Link>

      <Link to="/profile" style={{ color: "white", marginRight: "20px" }}>
        Student Profile
      </Link>

      <Link to="/courses" style={{ color: "white", marginRight: "20px" }}>
        Courses
      </Link>

      <Link to="/attendance" style={{ color: "white", marginRight: "20px" }}>
        Attendance
      </Link>

      <Link to="/notifications" style={{ color: "white" }}>
        Notifications
      </Link>
    </nav>
  );
}

export default Navbar;