
import { useState } from "react";
import Counter from "./counter/Counter";
import Square from "./square/Square";

const App = () => {
  const [value, setValue] = useState(0)
  return  <>
  <Counter value={value} setValue={setValue}></Counter>
  <Square value={value}></Square>
  </>;
};
export default App;