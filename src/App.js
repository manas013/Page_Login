import "./App.css";
import LoginPage from "./component/LoginForm/loginPage";
import background from "./Assests/Rectangle 1.png";

function App() {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "236px" }} src={background} alt="" />
      <LoginPage />
    </div>
  );
}

export default App;
