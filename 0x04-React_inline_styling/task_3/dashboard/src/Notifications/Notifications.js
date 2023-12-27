import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";


// Define the animations using Aphrodite's helper function
const fadeIn = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounce = {
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
};

// import "./Notifications.css";
const styles = StyleSheet.create({
  notificationsContainer: {
    display: "flex",
    alignItems: "center",
    position: "fixed", // Ensure the panel takes over the entire screen
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: 0, // Remove padding
    backgroundColor: "white", // Set background color
    fontSize: "20px", // Set font size
  },
  notificationsList: {
    marginRight: "20px",
  },
  closeButton: {
    marginRight: "10px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    animationName: fadeIn,
    animationDuration: "1s",
    animationIterationCount: 3,
    ":hover": {
      animationName: bounce,
      animationDuration: "0.5s",
      animationIterationCount: 3,
    },
  },
  menuItemHidden: {
    display: "none",
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length !== this.props.listNotifications.length
    );
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const content = "<strong>Test HTML</strong>";

    return (
      <>
        <div className="menuItem">No new notification for now</div>
        {displayDrawer && (
          <div className={css(styles.notificationsContainer)}>
            <div className={css(styles.notificationsList)}>
              <p>Here is the list of notifications </p>
              <ul>
                {listNotifications.length === 0 ? (
                  <NotificationItem
                    type="default"
                    value="No new notification for now"
                  />
                ) : (
                  listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))
                )}
              </ul>
            </div>
            <div className={css(styles.closeButton)}>
              <button aria-label="Close" onClick={this.handleButtonClick}>
                {/* Uncomment for visuals */}
                {/* <img src="../close-icon.png" alt="Close" /> */}
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

// Add a default prop value for displayDrawer (false by default)
Notifications.defaultProps = {
  displayDrawer: false,
};

// Define the prop types for the Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItem.propTypes),
};

export default Notifications;
