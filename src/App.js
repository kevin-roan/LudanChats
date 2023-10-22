import "./App.css";
import RouteLayouts from "./LayoutRoutes/RouteLayouts";

function App() {
  console.log("firebaseludan", process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <div className="App">
      <RouteLayouts />
    </div>
  );
}

export default App;
