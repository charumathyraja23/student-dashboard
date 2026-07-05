import { useEffect, useState } from "react";
import axios from "axios";
import attendanceData from "../data/attendance.json";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const response = await axios.get(
          "https://dummy-api-not-working.com/attendance"
        );
        setAttendance(response.data);
      } catch (error) {
        console.log("API Failed. Loading Mock Data...");
        setAttendance(attendanceData);
      } finally {
        setLoading(false);
      }
    };

    getAttendance();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Attendance</h1>

      {attendance.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Attendance: {student.attendance}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Attendance;