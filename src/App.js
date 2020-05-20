import React from "react";
import "./App.css";
import CharacterList from "./components/character-components/character-list/character-list.component";
import Header from "./components/layout-components/header/header.component";
import CharactersListContainer from "./components/character-components/character-list/character-list-container";
import CharactersListPage from "./components/pages/character-list/characters-list-page.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharactersListPage />
      </div>
    );
  }
}

export default App;
