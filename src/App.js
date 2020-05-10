import React from "react";
import "./App.css";
import CharacterList from "./components/character-components/character-list/character-list.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CharacterList />
      </div>
    );
  }
}

export default App;
