import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input label="Your name" id="name" type="text" />
      <Input label="Your email" id="email" type="email" />
    </main>
  );
}

export default App;
