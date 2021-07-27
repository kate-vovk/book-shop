import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import Layout from "./layout/Layout";
import { ErrorBoundary } from "./_shared/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <Routes />
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
