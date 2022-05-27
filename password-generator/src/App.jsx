import './Styles.scss';
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import {
    includeNumbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters
} from "./Characters";

function App() {

    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(20);
    const [uppercase, setUpperCase] = useState(true);
    const [lowerCase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);

    const handleGeneratorPassword = () => {
        if(!uppercase && !lowerCase && !numbers && !symbols) {
            alert("You must select at least one character type");
        }

        let characters = "";
        if(uppercase){
            characters += upperCaseLetters;
        }
        if (lowerCase){
            characters += lowerCaseLetters;
        }
        if(numbers){
            characters += includeNumbers;
        }
        if(symbols){
            characters += specialCharacters;
        }
        setPassword(passwordCreator(characters))
    }

    const passwordCreator = (characterList) => {
        let password = "";
        const characterListLength = characterList.length;
        for(let i = 0; i < passwordLength; i++) {
            const characterIndex = generateRandomIndex(characterListLength);
            password = password + characterList.charAt(characterIndex)
        }
        return password;
    }
    const generateRandomIndex = (limit) => {
        return Math.round(Math.random() * limit);
    }


      return (
        <div className="container">
          <div className="generator">
              <h2 className="generator_header">Password Generator</h2>
            <div className="generator_password">
                {password}
                <button className="generator_password_passwordBtn">
                    <FaClipboard/>
                </button>
            </div>
              <div className="form-group">
                  <label htmlFor="password-length">Password Length</label>
                  <input
                      name="password-length"
                      id="password-length" type="number"
                      max="20"
                      min="7"
                      defaultValue={passwordLength}
                      onChange={(e)=>setPasswordLength(e.target.value)}
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="">Include Uppercase Letters</label>
                  <input
                      id="uppercase-letters"
                      name="uppercase-letters"
                      type="checkbox"
                      checked={uppercase}
                      onChange={(e)=>setUpperCase(e.target.checked)}
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="include lowercase-letters">Include Lower Case Letters</label>
                  <input
                    id="lowercase-letters"
                    className="lowercase-letters"
                    type="checkbox"
                    checked={lowerCase}
                    onChange={(e)=>setLowerCase(e.target.checked)}
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="include-numbers">Include numbers</label>
                  <input
                      id="include-numbers"
                      className="include-numbers"
                      type="checkbox"
                      checked={numbers}
                      onChange={(e)=>setNumbers(e.target.checked)}
                  />
              </div>


              <div className="form-group">
                  <label htmlFor="inclued-symbols">Include  Symbols</label>
                  <input
                      id="inclued-symbols"
                      className="inclued-symbols"
                      type="checkbox"
                      checked={symbols}
                      onChange={(e)=>setSymbols(e.target.checked)}
                  />
              </div>
              <button className="generator_btn" onClick={handleGeneratorPassword}>Generate password</button>
          </div>
        </div>
      );
}

export default App;
