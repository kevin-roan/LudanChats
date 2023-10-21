import "./App.css";
import { useEffect } from "react";
import RouteLayouts from "./LayoutRoutes/RouteLayouts";

function App() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // Permission granted, you can send in-page notifications
        }
      });
    }
  }, []);
  if ("Notification" in window && Notification.permission === "granted") {
    const notification = new Notification("Hello Bhai", {
      body: "Hellow Bhai You have a new Notification.",
    });
  }
  return (
    <div className="App">
      <RouteLayouts />
    </div>
  );
}

export default App;
