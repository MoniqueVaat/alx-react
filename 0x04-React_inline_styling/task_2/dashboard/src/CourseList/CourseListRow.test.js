import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { render } from "@testing-library/react";
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
    const { container } = render(<CourseListRow {...props} />);

    // Test for the presence of Aphrodite class names
    expect(container.querySelector(".headerRow")).toBeInTheDocument();
    expect(container.querySelector(".cell")).toBeInTheDocument();
  });

  it("should render a regular row with correct inline styles", () => {
    const props = {
      isHeader: false,
      textFirstCell: "ES6",
      textSecondCell: "60",
    };
    const { container } = render(<CourseListRow {...props} />);

    // Test for the presence of Aphrodite class names
    expect(container.querySelector(".defaultRow")).toBeInTheDocument();
    expect(container.querySelectorAll(".cell")).toHaveLength(2); // Two cells in a regular row
  });
});