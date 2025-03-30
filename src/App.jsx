import "./App.css";
import Header from "./Components/Header";
import InputArea from "./Components/InputArea";
import InOutContainer from "./Components/InOutContainer";

function App() {
  return (
    <>
      <Header />
      <InOutContainer>
        <InputArea
          name="JSON"
          placeHolder="/* Add JSON data here */"
          deleteButton
          uploadButton
        />
        <InputArea name="JSON Schema" readOnly copyButton />
      </InOutContainer>
    </>
  );
}

export default App;
