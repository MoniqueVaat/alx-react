// actions/__tests__/notificationActionCreators.test.js
import {
  markAsRead,
  setNotificationFilter,
} from "../notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../notificationActionTypes";
import { NotificationTypeFilters } from "../notificationActionTypes";

describe("Notification Action Creators", () => {
  it("should create an action to mark a notification as read", () => {
    const index = 1;
    const expectedAction = { type: MARK_AS_READ, index: index };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it("should create an action to set the notification filter", () => {
    const filter = NotificationTypeFilters.DEFAULT; // Change this to the desired filter
    const expectedAction = { type: SET_TYPE_FILTER, filter: filter };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
