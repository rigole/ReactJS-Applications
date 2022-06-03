import './App.css';
import MainForm from "./Form/Form";
import Loading from "./Loading/Loading";
import Modal from "./Modal/Modal";

function App() {
  return (
    <main>
        <section className="quiz">
            <p className="correct-answers">correct answers: 3</p>
            <article className="container">
                <h2>Text</h2>
                <div className="btn-container"></div>
            </article>
            <button className="next-question">Next questions</button>
        </section>
    </main>
  );
}

export default App;
