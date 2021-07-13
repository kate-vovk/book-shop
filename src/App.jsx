import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
