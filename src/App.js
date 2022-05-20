import { Stopwatch } from "./Components/Stopwatch";
import Timer from "./Components/Timer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Stopwatch />
      <br />
      <h1>------------------------</h1>
      <Timer />
    </div>
  );
}
