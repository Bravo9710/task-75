import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem('text', text);
  }

  const handleClear = (e) => {
    setText('');
  }

  useEffect(() => {
    const storedText = localStorage.getItem('text');
    if (storedText) {
      setText(storedText);
    }
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea onChange={handleChange} value={text} className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button className="button is-large is-primary is-active">Save</button>
        <button onClick={handleClear} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;
