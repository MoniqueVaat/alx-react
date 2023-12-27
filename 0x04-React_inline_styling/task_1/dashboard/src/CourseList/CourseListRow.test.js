import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CourseListRow from "./CourseListRow";

configure({ adapter: new Adapter() });

describe("CourseListRow Component", () => {
  it("should render a header row with correct inline styles", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Available courses",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.prop("style")).toEqual({ backgroundColor: "#deb5b545" });
  });

  it("should render a regular row with correct inline styles", () => {
    const props = {
      isHeader: false,
      textFirstCell: "ES6",
      textSecondCell: "60",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.prop("style")).toEqual({ backgroundColor: "#f5f5f5ab" });
  });
});
