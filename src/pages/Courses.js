import { useEffect, useState } from "react";
import axios from "axios";
import coursesData from "../data/courses.json";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
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

    getCourses();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.course}</h3>
          <p>Duration: {course.duration}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Courses;