import { ChatEngine } from "react-chat-engine";
import './App.css';


function App() {
  return (
    <div className="App">
      <ChatEngine
          height="100vh"
          projectID="e50f29fc-c630-4eab-bee2-f1f9097c5aaf"
          userName="rigolux"
          userSecret="123456"
      />
    </div>
  );
}

export default App;
