import { Header } from "./components/Header/Header";
import { Model3D } from "./components/Model3D/Model3D";
import { LeftDescription } from "./components/LeftDescription/LeftDescription";
import { RightDescription } from "./components/RightDescription/RightDescription";


function App() {
  return (
    <>
      <Header />
      <div className="content">
        <LeftDescription />
        <Model3D />
        <RightDescription />
      </div>
    </>
  );
}

export default App;
