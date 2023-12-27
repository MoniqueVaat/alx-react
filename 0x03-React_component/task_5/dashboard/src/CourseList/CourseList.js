// import React from "react";
// import PropTypes from "prop-types";
// import CourseListRow from "./CourseListRow";
// import CourseShape from "./CourseShape";

// const CourseList = ({ listCourses }) => {
//   return (
//     <table id="CourseList">
//       <thead>
//         <CourseListRow textFirstCell="Available courses" isHeader={true} />
//         <CourseListRow
//           textFirstCell="Course name"
//           textSecondCell="Credit"
//           isHeader={true}
//         />
//       </thead>
//       <tbody>
//         {listCourses.length === 0 ? (
//           <CourseListRow
//             textFirstCell="No course available yet"
//             isHeader={false}
//           />
//         ) : (
//           listCourses.map((course) => (
//             <CourseListRow
//               key={course.id}
//               textFirstCell={course.name}
//               textSecondCell={course.credit}
//               isHeader={false}
//             />
//           ))
//         )}
//       </tbody>
//     </table>
//   );
// };

// CourseList.propTypes = {
//   listCourses: PropTypes.arrayOf(CourseShape),
// };

// CourseList.defaultProps = {
//   listCourses: [],
// };

// export default CourseList;

import React from "react";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
// import "./CourseList.css";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;