import { useEffect, useState } from "react";
import axios from "axios";
import attendanceData from "../data/attendance.json";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const response = await axios.get("https://dummy-api-not-working.com/attendance");
        setAttendance(response.data);
      } catch {
        setAttendance(attendanceData);
      } finally {
        setLoading(false);
      }
    };

    getAttendance();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="page">
      <h1>✅ Attendance</h1>

      <div className="student-container">
        {attendance.map((student) => (
          <div className="student-card" key={student.id}>
            <h2>{student.name}</h2>
            <h3 style={{ color: "green" }}>{student.attendance}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;