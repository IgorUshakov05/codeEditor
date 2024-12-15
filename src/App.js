import "./App.css";
import Dialog from "./components/Dialog";
import EditCode from "./components/EditCode";
import Head from "./components/Head";
function App() {
  return (
    <>
      <Head />
      <EditCode />
      <Dialog typeMessage="error" messages="Something went wrong!" />
    </>
  );
}

export default App;
