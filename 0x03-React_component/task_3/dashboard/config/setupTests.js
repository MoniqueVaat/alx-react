// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// setupTests.js
import 'jsdom-global/register';
const mockDocument = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

Object.defineProperty(global, "document", {
  value: mockDocument,
});


Enzyme.configure({ adapter: new Adapter() });


