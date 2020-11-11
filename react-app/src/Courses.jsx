import React, { useEffect, useState } from "react";
import { getCourses } from "./data/courses";

const Courses = () => {
  const courses = getCourses();
  const [uniqueCatefories, setUniqueCatefories] = useState([]);

  useEffect(() => {
    const displayUniqueCategories = () => {
      let categories = [];
      courses.map((course) => {
        categories.push(course.category);
      });
      setUniqueCatefories(categories);
    };
    displayUniqueCategories();
  }, []);

  return (
    <div data-cy="main-header" className="container">
      <h1 className="center">Course list</h1>

      <div>
        {courses.map((course) => {
          return (
            <div data-cy={"course-" + course.category} class="">
              <h2 data-cy="title">{course.title}</h2>
              <p>{course.description}</p>
              <p data-cy="category" className="capitalized">
                <span className="bold">Category:</span> {course.category}
              </p>
              <p>
                <span className="bold">Instructors:</span> {course.instructors}
              </p>
              <p>{course.info}</p>
              <p>
                <span className="bold">Price:</span> {course.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
