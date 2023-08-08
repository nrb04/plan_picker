import "./App.css";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>
      <div className="flex flex-col ">
        <progress
          className="progress progress-secondary w-56"
          value={0}
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="text-red-800 text-6xl text-bold  "> hello </div>
    </>
  );
}

export default App;
