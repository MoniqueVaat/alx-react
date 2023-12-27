import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite/no-important";
// Suppress style injections during testing
StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });

describe("CourseListRow Component", () => {
  it("should render a header row with correct inline styles", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Available courses",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    const expectedStyles = {
      backgroundColor: "#deb5b545",
      // Add any other expected styles for the header row here
    };
    const renderedStyles = StyleSheetTestUtils.getRenderedStyles(
      wrapper.getElement()
    );
    expect(renderedStyles).toMatchObject(expectedStyles);
  });

  it("should render a regular row with correct inline styles", () => {
    const props = {
      isHeader: false,
      textFirstCell: "ES6",
      textSecondCell: "60",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    const expectedStyles = {
      backgroundColor: "#f5f5f5ab",
      // Add any other expected styles for the regular row here
    };
    const renderedStyles = StyleSheetTestUtils.getRenderedStyles(
      wrapper.getElement()
    );
    expect(renderedStyles).toMatchObject(expectedStyles);
  });
});
