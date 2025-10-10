import Main from "./components/Main";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="flex ">
      <SideBar />
      <Main />
    </div>
  );
};

export default App;
