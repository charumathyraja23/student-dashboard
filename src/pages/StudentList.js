import { useEffect, useState } from "react";
import axios from "axios";
import studentsData from "../data/students.json";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStudents = async () => {
      try {
        // Wrong API URL (intentionally)
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
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;