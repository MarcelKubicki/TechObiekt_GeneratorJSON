import Header from "./Components/Header";
import InputArea from "./Components/InputArea";
import InOutContainer from "./Components/InOutContainer";
import DarkModeProvider from "./Contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
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
    </DarkModeProvider>
  );
}

export default App;
