import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e3a8a",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Dashboard
      </Link>

      <Link
        to="/students"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Student List
      </Link>

      <Link
        to="/profile"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Student Profile
      </Link>

      <Link
        to="/courses"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Courses
      </Link>

      <Link
        to="/attendance"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Attendance
      </Link>

      <Link
        to="/notifications"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Notifications
      </Link>
    </nav>
  );
}

export default Navbar;