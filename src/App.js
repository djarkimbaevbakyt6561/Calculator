import { useSelector } from "react-redux";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Header } from "./components/Header";

function App() {
  const auth = useSelector((store) => store.auth.auth)
  return (
    <div className="App">
      <Header />
      {auth && <Calculator />}
    </div>
  );
}

export default App;