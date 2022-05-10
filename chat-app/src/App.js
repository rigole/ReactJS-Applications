import {ChatEngine } from "react-chat-engine";
import ChatFeed from  './components/ChatFeed.jsx';
import LoginForm from "./components/LoginForm.jsx";
import './App.css';


function App() {

    if (!localStorage.getItem('username')){
        return <LoginForm/>
    }

  return (
    <div className="App">
      <ChatEngine
          height="100vh"
          projectID="e50f29fc-c630-4eab-bee2-f1f9097c5aaf"
          userName="Foplacide"
          userSecret="123"
          renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/>}
          onNewMessage = { () => Audio('https://chat-engine-assets-s3.amazonaws/click.mp3').play()}
      />
    </div>
  );
}

export default App;
