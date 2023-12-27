import { schema, normalize } from "normalizr";
import { normalizedNotifications } from "./notifications"; 
const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Your notifications data
const rawData = [
  // ... raw data objects
];

// Normalize the data using the notification schema
const normalizedData = normalize(rawData, [notification]);

// Export the normalized data
export const normalizedNotifications = normalizedData.entities;
// / Create a function to get all notifications by user
export function getAllNotificationsByUser(userId) {
  const userNotifications = normalizedNotifications.notifications;  // Access normalized notifications

  const contextObjects = Object.values(userNotifications)
    .filter(notification => notification.author === userId)
    .map(notification => normalizedNotifications.messages[notification.context]);

  return contextObjects;
}
