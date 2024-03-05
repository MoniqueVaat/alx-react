// actions/courseActionCreators.js
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { connect } from "react-redux";

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index: index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index: index,
});

const mapDispatchToProps = (dispatch) => {
  return {
    boundSelectCourse: (index) => dispatch(selectCourse(index)),
    boundUnSelectCourse: (index) => dispatch(unSelectCourse(index)),
  };
};

export default connect(null, mapDispatchToProps)(YourComponent);