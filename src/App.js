import "./App.css";
import { useEffect } from "react";
import RouteLayouts from "./LayoutRoutes/RouteLayouts";

function App() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
        }
      });
    }
  }, []);
  return (
    <div className="App">
      <RouteLayouts />
    </div>
  );
}

export default App;
