import React from "react";
import "./App.css";
import CharacterList from "./components/character-components/character-list/character-list.component";
import Header from "./components/layout-components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharacterList />
      </div>
    );
  }
}

export default App;
