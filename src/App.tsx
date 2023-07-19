import "./App.css";
import { PropertiesDisplay } from "./components/properties-display";

function App() {
  return (
    <div className="p-4 bg-teal-dark font:bold text-yellow-500">
      <h1 className="text-4xl mb-2">Welcome to Marvelous Mansions</h1>
      <h2 className="text-2xl mb-2">A one stop shop to your dream property!</h2>
      <h3 className="text-xl mb-4">Current property listings:</h3>
      <PropertiesDisplay />
    </div>
  );
}

export default App;
