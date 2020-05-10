import React, { Component } from "react";
import CharacterCard from "../character-card/character-card.component";

import "./character-list.styles.scss";

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentWillMount() {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3c577a3110c6fa24f646e66777e51b10&hash=e700ec10248a532fcfc59e6c0dd88421"
    )
      .then((response) => response.json())
      .then((response) => this.setState({ characters: response.data.results }));
  }

  render() {
    return (
      <div className="character-list">
        {this.state.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

export default CharacterList;
