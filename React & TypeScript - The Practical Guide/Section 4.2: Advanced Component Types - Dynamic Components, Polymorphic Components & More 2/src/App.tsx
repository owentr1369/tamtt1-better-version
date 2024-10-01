import "./App.css";
// import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      {/* <Input label="Your name" id="name" type="text" />
      <Input label="Your email" id="email" type="email" /> */}
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://www.google.com">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
