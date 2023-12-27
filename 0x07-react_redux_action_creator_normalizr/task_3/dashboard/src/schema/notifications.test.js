import { getAllNotificationsByUser } from "./notifications";
import { normalize } from 'normalizr';  // Import normalize function
import { notification, user, message } from "./notifications";  // Import your schema definition


// Mock the notificationData to avoid actual file loading

jest.mock("../notifications.json", () => ({
  default: [
    {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: {
        id: "5debd764a7c57c7839d722e9",
      },
    },
    {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      author: {
        id: "5debd764a7c57c7839d722e9",
      },
    },
    // ... other notifications
  ],
}));

describe("getAllNotificationsByUser", () => {
  it("returns correct notifications for a given user", () => {
    const userId = "5debd764a7c57c7839d722e9";
    const expectedNotifications = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value:
          "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      },
    ];

    const userNotifications = getAllNotificationsByUser(userId);
    expect(userNotifications).toEqual(expectedNotifications);
  });
});
const rawData = [
  {
    guid: "5debd76480edafc8af244228",
    // ... other properties
  },
  {
    guid: "5debd764507712e7a1307303",
    // ... other properties
  },
  // ... more data
];

describe("Notifications Normalization", () => {
  it("normalizes data correctly", () => {
    // Normalize the data using the notification schema
    const normalizedData = normalize(rawData, [notification]);

    // Extract the result array from the normalized data
    const resultArray = normalizedData.result;

    // Expected result array
    const expectedArray = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b",
    ];

    // Compare the normalized result array with the expected array
    expect(resultArray).toEqual(expectedArray);
  });
});

describe("Notifications Normalization", () => {
  it("normalizes users entity correctly", () => {
    const normalizedData = normalize(rawData, [notification]);

    const userId = "5debd764a7c57c7839d722e9";
    const normalizedUser = normalizedData.entities.users[userId];

    const expectedUser = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32",
    };

    expect(normalizedUser).toEqual(expectedUser);
  });

  it("normalizes messages entity correctly", () => {
    const normalizedData = normalize(rawData, [notification]);

    const messageGuid = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";
    const normalizedMessage = normalizedData.entities.messages[messageGuid];

    const expectedMessage = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi.",
    };

    expect(normalizedMessage).toEqual(expectedMessage);
  });

  it("normalizes notifications entity correctly", () => {
    const normalizedData = normalize(rawData, [notification]);

    const notificationId = "5debd7642e815cd350407777";
    const normalizedNotification =
      normalizedData.entities.notifications[notificationId];

    const expectedNotification = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777",
    };

    expect(normalizedNotification).toEqual(expectedNotification);
  });
});