import "./App.css";
import { PropertiesDisplay } from "./components/properties-display";

function App() {
  return (
    <div className="p-4 bg-teal-dark font:bold text-yellow-500 md:p-8">
      <h1 className="text-2xl mb-2 md:text-4xl">
        Welcome to Marvelous Mansions
      </h1>
      <h2 className="text-xl mb-2 md:text-2xl">
        A one stop shop to your dream property!
      </h2>
      <h3 className="text-lg mb-4 md:text-xl">Current property listings:</h3>
      <PropertiesDisplay />
    </div>
  );
}

export default App;
