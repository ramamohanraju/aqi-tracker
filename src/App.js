import logo from './logo.svg';
import './App.css';

function App() {

  const exampleSocket = new WebSocket('ws://city-ws.herokuapp.com/');
  exampleSocket.onmessage = function(event) {
    let data = event.data;
    document.getElementById("data").innerHTML = data;
  };
  return (
    <div className="App">
      <body>
        <div id="data">

        </div>
      </body>
    </div>
  );
}

export default App;
