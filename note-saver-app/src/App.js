import logo from './logo.svg';
import Header from "./components/Header"
import Count from "./components/Count"
import NoteArea from "./components/NoteArea";
import './index.css'



function App() {
  return (
    <div>
        <Header/>
        <Count/>
        <NoteArea/>
    </div>
  );
}

export default App;
