// actions/__tests__/uiActionCreators.test.js
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  loginRequest,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../uiActionCreators";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("UI Action Creators", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should dispatch LOGIN and LOGIN_SUCCESS on successful API response", () => {
    fetchMock.getOnce("/login-success.json", { status: 200 });
    const expectedActions = [{ type: LOGIN }, { type: LOGIN_SUCCESS }];
    const store = mockStore({});

    return store
      .dispatch(loginRequest("test@example.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("should dispatch LOGIN and LOGIN_FAILURE on API failure", () => {
    fetchMock.getOnce("/login-success.json", { status: 500 });
    const expectedActions = [{ type: LOGIN }, { type: LOGIN_FAILURE }];
    const store = mockStore({});

    return store
      .dispatch(loginRequest("test@example.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
