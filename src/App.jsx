import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./components/Routes";
import HTTPService from "./services/HTTPService";

function App() {
  const mock = "https://run.mocky.io/v3/0f2762f5-6813-4478-aa22-e32f47a9dd36";
  console.log(HTTPService.get(mock));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
