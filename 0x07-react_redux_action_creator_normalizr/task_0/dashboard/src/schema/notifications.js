import * as notificationsData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
    const filteredId = notificationsData.filter(obj => { obj.author.id === userId
        return filteredId;
    });
}
