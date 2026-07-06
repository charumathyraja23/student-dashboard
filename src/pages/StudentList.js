import { useEffect, useState } from "react";
import axios from "axios";
import studentsData from "../data/students.json";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
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

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading Students...</h2>;
  }

  return (
    <div className="page">
      <h1>👨‍🎓 Student List</h1>

      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #2563eb",
            outline: "none",
            fontSize: "16px",
          }}
        />
      </div>

      <div className="student-grid">
        {filteredStudents.map((student) => (
          <div className="student-card" key={student.id}>
            <img
              src={`https://ui-avatars.com/api/?name=${student.name}&background=2563eb&color=fff&size=128`}
              alt={student.name}
            />

            <h3>{student.name}</h3>

            <p>
              <strong>🎂 Age:</strong> {student.age}
            </p>

            <p>
              <strong>💻 Department:</strong> {student.department}
            </p>

            <p>
              <strong>📧 Email:</strong> {student.email}
            </p>

            <p>
              <strong>📞 Phone:</strong> {student.phone}
            </p>

            <button style={{ marginTop: "15px" }}>
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;