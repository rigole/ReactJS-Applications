import './Styless.scss';

function App() {
  return (
    <div className="container">
      <div className="generator">
          <h2 className="generator_header">Password Generator</h2>
        <div className="generator_password">
            <button className="generator_password_passwordBtn">Clipboard</button>
        </div>
          <div className="form-group">
              <label htmlFor="password-length">Password Length</label>
              <input
                  name="password-length"
                  id="password-length" type="number"
                  max="20"
                  min="7"
              />
          </div>

          <div className="form-group">
              <label htmlFor="">Include Uppercase Letters</label>
              <input
                  id="uppercase-letters"
                  name="uppercase-letters"
                  type="checkbox"
              />
          </div>

          <div className="form-group">
              <label htmlFor="include lowercase-letters">Include Lower Case Letters</label>
              <input
                id="lowercase-letters"
                className="lowercase-letters"
                type="checkbox"
              />
          </div>

          <div className="form-group">
              <label htmlFor="include-numbers">Include numbers</label>
              <input
                  id="include-numbers"
                  className="include-numbers"
                  type="checkbox"
              />
          </div>


          <div className="form-group">
              <label htmlFor="inclued-symbols">Include  Symbols</label>
              <input
                  id="inclued-symbols"
                  className="inclued-symbols"
                  type="checkbox"
              />
          </div>
      </div>
    </div>
  );
}

export default App;
