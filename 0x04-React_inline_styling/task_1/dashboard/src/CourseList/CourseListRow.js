import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  // Define the styles for the rows based on the isHeader prop
  const rowStyle = {
    backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab",
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        <>
          <th colSpan="2">{textFirstCell}</th>
        </>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
