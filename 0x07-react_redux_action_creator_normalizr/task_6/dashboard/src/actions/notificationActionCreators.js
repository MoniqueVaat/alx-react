// actions/notificationActionCreators.js
import { connect } from "react-redux";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index: index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter: filter,
});
const mapDispatchToProps = (dispatch) => {
  return {
    boundMarkAsRead: (index) => dispatch(markAsRead(index)),
    boundSetNotificationFilter: (filter) =>
      dispatch(setNotificationFilter(filter)),
  };
};

export default connect(null, mapDispatchToProps)(YourComponent);