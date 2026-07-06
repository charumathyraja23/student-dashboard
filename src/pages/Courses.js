import { useEffect, useState } from "react";
import axios from "axios";
import coursesData from "../data/courses.json";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get("https://dummy-api-not-working.com/courses");
        setCourses(response.data);
      } catch {
        setCourses(coursesData);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="page">
      <h1>📚 Courses</h1>

      <div className="student-container">
        {courses.map((course) => (
          <div className="student-card" key={course.id}>
            <h2>{course.course}</h2>
            <p>📅 {course.duration}</p>
            <p>👨‍🏫 {course.trainer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;