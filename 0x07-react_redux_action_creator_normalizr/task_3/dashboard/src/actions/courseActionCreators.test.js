// actions/__tests__/courseActionCreators.test.js
import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Course Action Creators", () => {
  it("should create an action to select a course", () => {
    const index = 1;
    const expectedAction = { type: SELECT_COURSE, index: index };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it("should create an action to unselect a course", () => {
    const index = 1;
    const expectedAction = { type: UNSELECT_COURSE, index: index };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});
