import './Styles.scss';
import { useState, useRef, useEffect } from "react";
import { FaClipboard } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    includeNumbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters
} from "./Characters";
import {COPY_SUCCESS, ALERT } from "./Message";

//toast.configure();

function App() {
    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(20);
    const [uppercase, setUpperCase] = useState(true);
    const [lowerCase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);

    const copyBtn = useRef();

    const handleGeneratorPassword = () => {
        if(!uppercase && !lowerCase && !numbers && !symbols) {
            notifs(ALERT, true);


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

    useEffect(() => {
        handleGeneratorPassword();
    }, []);


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


    const copyFromClipboard = () => {
      const newTextArea = document.createElement("textarea");
      newTextArea.innerText = password;
      document.body.appendChild(newTextArea);
      newTextArea.select();
      document.execCommand("copy");
      newTextArea.remove();

      copyBtn.current.disabled = true;
      setTimeout(() => {
        copyBtn.current.disabled = false;
      }, 3000)
    }

     const notifs = (message, hasError = false) => {
         if(hasError){
            toast.error(message, {
                position:toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar:false,
                closeOnclick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
            });
         }else{
             toast(message, {
                position:toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar:false,
                closeOnclick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
            });
         }

     }

     const handleCopy = (e) => {
         copyFromClipboard();
        notifs(COPY_SUCCESS);

     }

      return (
        <div className="container">
          <div className="generator">
              <h2 className="generator_header">Password Generator</h2>
            <div className="generator_password">
                {password}
                <button className="generator_password_passwordBtn" ref={copyBtn} onClick={handleCopy}>
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
