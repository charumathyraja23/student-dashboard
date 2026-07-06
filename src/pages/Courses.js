import { useEffect, useState } from "react";
import axios from "axios";
import coursesData from "../data/courses.json";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://dummy-api-not-working.com/courses"
        );
        setCourses(response.data);
      } catch (error) {
        console.log("API Failed. Loading Mock Data...");
        setCourses(coursesData);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading Courses...</h2>;
  }

  return (
    <div className="page">
      <h1>📚 Courses</h1>

      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <h2>{course.name}</h2>

          <p>
            <strong>👨‍🏫 Trainer:</strong> {course.trainer}
          </p>

          <p>
            <strong>📅 Duration:</strong> {course.duration}
          </p>

          <p>
            <strong>📈 Progress:</strong> {course.progress}%
          </p>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>

          <br />

          <button>Continue Learning</button>
        </div>
      ))}
    </div>
  );
}

export default Courses;