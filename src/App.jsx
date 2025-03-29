import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InputArea from "./Components/InputArea";
import InOutContainer from "./Components/InOutContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <InOutContainer>
        <InputArea />
        <InputArea />
      </InOutContainer>
    </>
  );
}

export default App;
