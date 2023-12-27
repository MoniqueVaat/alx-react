import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(
  ({ id, type = "default", html, value, markAsRead }) => {
    const handleClick = () => {
      markAsRead(id);
    };

    return (
      <li data-notification-type={type} onClick={handleClick}>
        {html ? <div dangerouslySetInnerHTML={html} /> : <span>{value}</span>}
      </li>
    );
  }
);

// Define the prop types for the NotificationItem component
NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

// Set the default prop values
NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
