import { useEffect, useState } from "react";
import axios from "axios";
import notificationsData from "../data/notifications.json";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get("https://dummy-api-not-working.com/notifications");
        setNotifications(response.data);
      } catch {
        setNotifications(notificationsData);
      } finally {
        setLoading(false);
      }
    };

    getNotifications();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="page">
      <h1>🔔 Notifications</h1>

      {notifications.map((item) => (
        <div className="notification-card" key={item.id}>
          {item.message}
        </div>
      ))}
    </div>
  );
}

export default Notifications;