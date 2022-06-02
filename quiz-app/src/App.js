import './App.css';
import MainForm from "./Form/Form";
import Loading from "./Loading/Loading";
import Modal from "./Modal/Modal";

function App() {
  return (
    <div className="App">
      <MainForm />
        <Modal/>
        <Loading/>
    </div>
  );
}

export default App;
