import { useEffect, useState } from "react";
import axios from "axios";
import studentsData from "../data/students.json";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get(
          "https://dummy-api-not-working.com/students"
        );
        setStudents(response.data);
      } catch (error) {
        console.log("API Failed. Loading Mock Data...");
        setStudents(studentsData);
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="page">
      <h1>👨‍🎓 Student List</h1>

      <div className="student-container">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <div className="avatar">
              {student.name.charAt(0)}
            </div>

            <h2>{student.name}</h2>

            <p><b>Course:</b> {student.course}</p>

            <p><b>Email:</b> {student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;